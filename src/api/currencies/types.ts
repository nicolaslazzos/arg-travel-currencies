export enum CurrenciesHandlers {
  FIXER = 'fixer'
}

export interface Rate {
  currency: string;
  base: string;
  rate: number;
  timestamp: string;
}
export interface CurrenciesHandler {
  getRates(base?: string): Promise<Rate[]>;
  getRate(currency: String, base?: string): Promise<Rate | false>;
}