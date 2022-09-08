import axios from 'axios';
import { DollarHandler, DollarTypes, Rate, VariationTypes } from '../types';
import dayjs from '../../../utils/dayjs';

const fetch = {
  [DollarTypes.OFICIAL]: {
    type: DollarTypes.OFICIAL,
    url: '/dolar/oficial/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.BLUE]: {
    type: DollarTypes.BLUE,
    url: '/dolar/informal/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.TURISTA]: {
    type: DollarTypes.TURISTA,
    url: '/dolarturista/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.AHORRO]: {
    type: DollarTypes.AHORRO,
    url: '/dolarahorro/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.MAYORISTA]: {
    type: DollarTypes.MAYORISTA,
    url: '/dolar/mayorista/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.MEP]: {
    type: DollarTypes.MEP,
    url: '/dolarrava/mep/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.CL]: {
    type: DollarTypes.CL,
    url: '/dolarrava/cl/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.FUTURO]: {
    type: DollarTypes.FUTURO,
    url: '/dolarfuturo/variacion',
    date: 'DD/MM/YYYY - HH:mm'
  },
  [DollarTypes.NACION]: {
    type: DollarTypes.NACION,
    url: '/dolarnacion/variacion',
    date: 'DD-MM-YYYY HH:mm'
  },
  [DollarTypes.CRYPTO]: {
    type: DollarTypes.CRYPTO,
    url: '',
    date: 'DD/MM/YYYY - HH:mm'
  }
};

interface AmbitoRate {
  compra: string;
  venta: string;
  fecha: string;
  variacion: string;
  ['class-variacion']: string;
  nombre: string;
  val1: string;
  val2: string;
  link: string;
}

export default class Handler implements DollarHandler {
  async getRates(): Promise<Rate[]> {
    const data = await Promise.allSettled(Object.values(fetch).map(({ type }) => this.getRate(type)));

    return data.map(p => p.status === 'fulfilled' ? p.value : false).filter(v => !!v) as Rate[];
  }

  async getRate(type: DollarTypes): Promise<Rate | false> {
    try {
      const { url, date } = fetch[type];

      if (!url) return false;

      const data: AmbitoRate = (await axios({ method: 'GET', baseURL: 'https://mercados.ambito.com', url })).data;

      const { compra, venta, fecha, variacion } = data;

      const buy = parseFloat(compra.replace(',', '.'));
      const sell = parseFloat(venta.replace(',', '.'));

      return {
        type,
        buy,
        sell,
        average: +parseFloat(`${(buy + sell) / 2}`).toFixed(2),
        variation: {
          sign: data['class-variacion'] == 'up' ? VariationTypes.UP : data['class-variacion'] == 'down' ? VariationTypes.DOWN : VariationTypes.EQUAL,
          value: +parseFloat(variacion.replace('-', '').replace('+', '').replace('%', '').replace(',', '.')).toFixed(2)
        },
        timestamp: dayjs(fecha, date).toISOString()
      };
    } catch (e) {
      return false;
    }
  }
} 