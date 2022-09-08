import axios from 'axios';
import { CurrenciesHandler, Rate } from '../types';
import dayjs from '../../../utils/dayjs';

interface FixerRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: { [currency: string]: number; };
}

export default class Handler implements CurrenciesHandler {
  async getRates(base?: string): Promise<Rate[]> {
    try {
      // const data: FixerRates = (await axios({ method: 'GET', baseURL: 'https://api.apilayer.com/fixer', url: '/latest', params: { base: base ?? 'USD' } })).data;
      const data = response;

      const { rates } = data;

      return Object.keys(rates).map(currency => ({ currency, base: data.base, rate: rates[currency], timestamp: dayjs(data.timestamp).toISOString() })) as Rate[];
    } catch (e) {
      return [];
    }
  }

  async getRate(currency: string, base?: string): Promise<Rate | false> {
    try {
      // const data: FixerRates = (await axios({ method: 'GET', baseURL: 'https://api.apilayer.com/fixer', url: '/latest', params: { base: base ?? 'USD', symbols: currency } })).data;
      const data = response;

      const { rates } = data;

      return { currency, base: data.base, rate: rates[currency], timestamp: dayjs(data.timestamp).toISOString() } as Rate;
    } catch (e) {
      return false;
    }
  }
}

const response: FixerRates = {
  "success": true,
  "timestamp": 1662433804,
  "base": "USD",
  "date": "2022-09-06",
  "rates": {
    "AED": 3.673104,
    "AFN": 87.909111,
    "ALL": 117.905529,
    "AMD": 402.026536,
    "ANG": 1.796038,
    "AOA": 428.178803,
    "ARS": 140.1574,
    "AUD": 1.467534,
    "AWG": 1.805,
    "AZN": 1.688724,
    "BAM": 1.962099,
    "BBD": 2.012209,
    "BDT": 94.699465,
    "BGN": 1.96307,
    "BHD": 0.376997,
    "BIF": 2056.03792,
    "BMD": 1,
    "BND": 1.399343,
    "BOB": 6.886509,
    "BRL": 5.155497,
    "BSD": 0.996574,
    "BTC": 0.000050584705,
    "BTN": 79.589576,
    "BWP": 12.908915,
    "BYN": 2.515913,
    "BYR": 19600,
    "BZD": 2.008798,
    "CAD": 1.310861,
    "CDF": 2025.000234,
    "CHF": 0.97747,
    "CLF": 0.031956,
    "CLP": 881.749983,
    "CNY": 6.936598,
    "COP": 4463.33,
    "CRC": 656.464274,
    "CUC": 1,
    "CUP": 26.5,
    "CVE": 110.622865,
    "CZK": 24.708402,
    "DJF": 177.415067,
    "DKK": 7.47063,
    "DOP": 53.165801,
    "DZD": 140.38252,
    "EGP": 19.240699,
    "ERN": 15,
    "ETB": 52.605523,
    "EUR": 1.004625,
    "FJD": 2.22425,
    "FKP": 0.823605,
    "GBP": 0.863535,
    "GEL": 2.859741,
    "GGP": 0.823605,
    "GHS": 9.991021,
    "GIP": 0.823605,
    "GMD": 55.149973,
    "GNF": 8607.729541,
    "GTQ": 7.723709,
    "GYD": 208.504512,
    "HKD": 7.84895,
    "HNL": 24.546937,
    "HRK": 7.552901,
    "HTG": 120.582851,
    "HUF": 405.189011,
    "IDR": 14879.2,
    "ILS": 3.40822,
    "IMP": 0.823605,
    "INR": 79.79195,
    "IQD": 1454.497118,
    "IRR": 42300.000052,
    "ISK": 143.149924,
    "JEP": 0.823605,
    "JMD": 150.517905,
    "JOD": 0.708965,
    "JPY": 140.492501,
    "KES": 119.790033,
    "KGS": 80.970299,
    "KHR": 4120.281895,
    "KMF": 495.95008,
    "KPW": 900.00035,
    "KRW": 1372.349895,
    "KWD": 0.30858,
    "KYD": 0.830453,
    "KZT": 470.633675,
    "LAK": 15583.388928,
    "LBP": 1506.999794,
    "LKR": 357.770176,
    "LRD": 153.999507,
    "LSL": 17.356157,
    "LTL": 2.95274,
    "LVL": 0.60489,
    "LYD": 4.934416,
    "MAD": 10.590962,
    "MDL": 19.318429,
    "MGA": 4196.786766,
    "MKD": 61.812491,
    "MMK": 2092.784719,
    "MNT": 3194.961563,
    "MOP": 8.056842,
    "MRO": 356.999828,
    "MUR": 44.849939,
    "MVR": 15.396279,
    "MWK": 1023.591374,
    "MXN": 19.96485,
    "MYR": 4.490379,
    "MZN": 63.82948,
    "NAD": 17.296843,
    "NGN": 423.420278,
    "NIO": 35.815715,
    "NOK": 9.93345,
    "NPR": 127.337296,
    "NZD": 1.63464,
    "OMR": 0.385,
    "PAB": 0.996594,
    "PEN": 3.866453,
    "PGK": 3.511449,
    "PHP": 56.9245,
    "PKR": 218.994999,
    "PLN": 4.738202,
    "PYG": 6889.342556,
    "QAR": 3.641004,
    "RON": 4.847799,
    "RSD": 117.850097,
    "RUB": 60.875009,
    "RWF": 1036.44143,
    "SAR": 3.759072,
    "SBD": 8.206979,
    "SCR": 12.719869,
    "SDG": 582.506495,
    "SEK": 10.772165,
    "SGD": 1.402825,
    "SHP": 1.377395,
    "SLL": 14194.999883,
    "SOS": 568.502245,
    "SRD": 25.806501,
    "STD": 20697.981008,
    "SVC": 8.71986,
    "SYP": 2512.53037,
    "SZL": 17.206703,
    "THB": 36.459667,
    "TJS": 10.090541,
    "TMT": 3.5,
    "TND": 3.213953,
    "TOP": 2.36395,
    "TRY": 18.219701,
    "TTD": 6.750066,
    "TWD": 30.837801,
    "TZS": 2331.999995,
    "UAH": 36.804623,
    "UGX": 3814.038414,
    "USD": 1,
    "UYU": 40.670756,
    "UZS": 10920.470905,
    "VND": 23530,
    "VUV": 116.056079,
    "WST": 2.66746,
    "XAF": 658.0595,
    "XAG": 0.054545,
    "XAU": 0.000582,
    "XCD": 2.70255,
    "XDR": 0.766441,
    "XOF": 658.052898,
    "XPF": 120.224997,
    "YER": 250.249536,
    "ZAR": 17.093425,
    "ZMK": 9001.19364,
    "ZMW": 15.322201,
    "ZWL": 321.999592
  }
};