import { theme as config } from '@hackclub/design-system';

export const basic = {
  black: '#1f2d3d',

  white: '#ffffff',
  adway: '#a50104',
  info: '#0058e1'
};

basic.primary = basic.adway;

export const colors = {
  ...basic
};

config.colors = colors;

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';
const sans = '"Graphik"';
config.font = `${sans},${baseFamily}`;

export default config;
