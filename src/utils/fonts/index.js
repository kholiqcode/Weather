import { PixelRatio } from 'react-native';

export const scaleFont = (size) => size * PixelRatio.getFontScale();

// FONT FAMILY
export const FONT_FAMILY_LIGHT = 'Poppins-Light';
export const FONT_FAMILY_REGULAR = 'Poppins-Regular';
export const FONT_FAMILY_MEDIUM = 'Poppins-Medium';
export const FONT_FAMILY_BOLD = 'Poppins-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_MEDIUM = '500';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// FONT STYLE
export const FONT_REGULAR = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
});

export const FONT_MEDIUM = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
});

export const FONT_BOLD = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
});
