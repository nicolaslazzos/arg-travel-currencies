export enum DolarHandlers {
  AMBITO = 'ambito'
}

export enum PriceTypes {
  BUY = 'buy',
  AVERAGE = 'average',
  SELL = 'sell',
}

export enum DollarTypes {
  OFICIAL = 'oficial',
  BLUE = 'blue',
  TURISTA = 'turista',
  AHORRO = 'ahorro',
  MAYORISTA = 'mayorista',
  MEP = 'mep',
  CL = 'cl',
  FUTURO = 'futuro',
  NACION = 'nacion',
  CRYPTO = 'crypto',
}

export enum VariationTypes {
  UP = '+',
  DOWN = '-',
  EQUAL = '='
}

export interface Rate {
  type: DollarTypes;
  buy: number;
  sell: number;
  average: number;
  variation: {
    sign: VariationTypes;
    value: number;
  };
  timestamp: string;
}

export interface DollarHandler {
  getRates(): Promise<Rate[]>;
  getRate(type: DollarTypes): Promise<Rate | false>;
}