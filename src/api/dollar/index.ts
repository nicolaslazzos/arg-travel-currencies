import { DollarHandler, DolarHandlers } from './types';
import AmbitoHandler from './handlers/ambito';

export * from './types';

class DollarApi {
  getHandler(handler?: DolarHandlers): DollarHandler {
    return new AmbitoHandler();
  };
}

export default new DollarApi();