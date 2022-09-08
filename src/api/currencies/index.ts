import { CurrenciesHandler, CurrenciesHandlers } from './types';
import FixerHandler from './handlers/fixer';

export * from './types';

class CurrenciesApi {
  getHandler(handler?: CurrenciesHandlers): CurrenciesHandler {
    return new FixerHandler();
  };
}

export default new CurrenciesApi();