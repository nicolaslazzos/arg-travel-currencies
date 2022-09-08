import { DollarTypes } from '../api/dollar/types';
import { PriceTypes } from '../api/dollar';

export default {
  es: {
    conversor: 'Conversor',
    dollar: 'Dólar',
    dollars: {
      [DollarTypes.OFICIAL]: 'Oficial',
      [DollarTypes.BLUE]: 'Blue',
      [DollarTypes.TURISTA]: 'Turista',
      [DollarTypes.AHORRO]: 'Ahorro',
      [DollarTypes.MAYORISTA]: 'Mayorista',
      [DollarTypes.MEP]: 'MEP',
      [DollarTypes.CL]: 'CCL',
      [DollarTypes.FUTURO]: 'Futuro',
      [DollarTypes.NACION]: 'Nación',
      [DollarTypes.CRYPTO]: 'Crypto',
    },
    [PriceTypes.BUY]: 'Compra',
    [PriceTypes.SELL]: 'Venta',
    [PriceTypes.AVERAGE]: 'Promedio',
  },
  en: {
    conversor: 'Conversor',
    dollar: 'Dollar',
    dollars: {
      [DollarTypes.OFICIAL]: 'Oficial',
      [DollarTypes.BLUE]: 'Blue',
      [DollarTypes.TURISTA]: 'Turista',
      [DollarTypes.AHORRO]: 'Ahorro',
      [DollarTypes.MAYORISTA]: 'Mayorista',
      [DollarTypes.MEP]: 'MEP',
      [DollarTypes.CL]: 'CCL',
      [DollarTypes.FUTURO]: 'Futuro',
      [DollarTypes.NACION]: 'Nación',
      [DollarTypes.CRYPTO]: 'Crypto',
    },
    [PriceTypes.BUY]: 'Buy',
    [PriceTypes.SELL]: 'Sell',
    [PriceTypes.AVERAGE]: 'Average',
  }
};