import {SCREEN_HEIGHT} from './Screen';

const FONTSIZE = {
  h1: Math.round(SCREEN_HEIGHT * 0.037),
  h2: Math.round(SCREEN_HEIGHT * 0.032),
  h3: Math.round(SCREEN_HEIGHT * 0.025),
  h4: Math.round(SCREEN_HEIGHT * 0.022),
  body1: Math.round(SCREEN_HEIGHT * 0.02),
  body2: Math.round(SCREEN_HEIGHT * 0.017),
  label: Math.round(SCREEN_HEIGHT * 0.015),
  button1: Math.round(SCREEN_HEIGHT * 0.017),
  button2: Math.round(SCREEN_HEIGHT * 0.015),
};

const FONTFAMILY = {
  manrope700: 'Manrope-Bold',
  manrope600: 'Manrope-SemiBold',
  manrope500: 'Manrope-Medium',
  manrope400: 'Manrope-Regular',
};

export {FONTSIZE, FONTFAMILY};
