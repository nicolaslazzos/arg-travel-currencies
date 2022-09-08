import { useEffect, useState, useRef } from 'react';
import { View } from 'react-native';
import { Button, HStack } from 'native-base';

import { ListItem } from '../components/ListItem';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

import DollarApi, { DollarHandler, PriceTypes, VariationTypes, DollarTypes, Rate as DollarRate } from '../api/dollar';
import CurrenciesApi, { CurrenciesHandler, Rate as CurrencyRate } from '../api/currencies';

import dayjs from '../utils/dayjs';
import i18n from '../i18n';
import { CURRENCIES } from '../constants';

const enabled = ['ARS', 'EUR', 'USD', 'CHF', 'HUF', 'GBP'];

const Screen = () => {
  const dollarHandler = useRef<DollarHandler>();
  const currenciesHandler = useRef<CurrenciesHandler>();

  const [dollarRates, setDollarRates] = useState<DollarRate[]>([]);
  const [currenciesRates, setCurrenciesRates] = useState<CurrencyRate[]>([]);

  const [currencyFrom, setCurrencyFrom] = useState<string>('USD');
  const [currencyTo, setCurrencyTo] = useState<string>('ARS');
  const [amount, setAmount] = useState<string>('1');
  const [priceType, setPriceType] = useState<PriceTypes>(PriceTypes.SELL);

  useEffect(() => {
    dollarHandler.current = DollarApi.getHandler();
    currenciesHandler.current = CurrenciesApi.getHandler();

    loadData();
  }, []);

  const loadData = async () => {
    try {
      if (dollarHandler.current) {
        const result = await dollarHandler.current.getRates();
        setDollarRates(result);
      }

      if (currenciesHandler.current) {
        const result = await currenciesHandler.current.getRates();
        setCurrenciesRates(result);
      }
    } catch (e) {
      console.error('error', e);
    }
  };

  const getConversion = (rate: DollarRate) => {
    // current dollar quote price
    const arsCurrentPrice = priceType === 'buy' ? rate.buy : rate.sell;

    // base dollar quote price
    const arsOficialRate = dollarRates.find(r => r.type === DollarTypes.OFICIAL) as DollarRate;
    const arsOficialPrice = priceType === 'buy' ? arsOficialRate.buy : arsOficialRate.sell;

    // currency from price
    const currencyFromRate = currenciesRates.find(r => r.currency === currencyFrom) as CurrencyRate;
    const fromPrice = currencyFrom === 'ARS' ? arsOficialPrice : currencyFromRate?.rate ?? 0;

    // currency to price
    const currencyToRate = currenciesRates.find(r => r.currency === currencyTo) as CurrencyRate;
    const toPrice = currencyTo === 'ARS' ? arsOficialPrice : currencyToRate?.rate ?? 0;

    const result = parseFloat(amount || '1') / fromPrice * toPrice * (arsCurrentPrice / arsOficialPrice);

    return parseFloat(`${result}`).toFixed(2);
  };

  const renderForm = () => {
    return (
      <View>
        <HStack>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Select
              placeholder='From'
              value={currencyFrom}
              onValueChange={setCurrencyFrom}
              items={CURRENCIES.filter((currency) => enabled.includes(currency.value))}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Select
              placeholder='To'
              value={currencyTo}
              onValueChange={setCurrencyTo}
              items={CURRENCIES.filter((currency) => enabled.includes(currency.value))}
            />
          </View>
        </HStack>
        <Input
          placeholder='Amount'
          value={amount}
          keyboardType="decimal-pad"
          onChangeText={setAmount}
        />
        <Button.Group isAttached marginBottom={4}>
          {[PriceTypes.BUY, PriceTypes.AVERAGE, PriceTypes.SELL].map(type => {
            return (
              <Button
                flex={1}
                variant={type === priceType ? 'solid' : 'outline'}
                onPress={() => setPriceType(type)}
              >
                {i18n.t(type).toUpperCase()}
              </Button>
            );
          })}
        </Button.Group>
      </View>
    );
  };

  const renderDollarRates = () => {
    if (!dollarRates.length) return null;

    return dollarRates.map(rate => {
      return (
        <ListItem
          key={rate.type}
          title={i18n.t(`dollars.${rate.type}`)}
          subtitle={dayjs(rate.timestamp).format('DD/MM HH:mm')}
          rightTitle={`${currencyTo} ${getConversion(rate)}`}
          rightSubtitle={`${rate.variation.sign}${parseFloat(`${rate.variation.value}`).toFixed(2)}%`}
          rightSubtitleProps={{ status: rate.variation.sign == VariationTypes.UP ? 'success' : rate.variation.sign == VariationTypes.DOWN ? 'error' : 'info' }}
        />
      );
    });
  };

  return (
    <>
      {renderForm()}
      {renderDollarRates()}
    </>
  );
};

export default Screen;
