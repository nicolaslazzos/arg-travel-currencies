const dayjs = require('dayjs');

require('dayjs/locale/es');

const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);

export default dayjs;