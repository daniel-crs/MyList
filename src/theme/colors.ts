export const colors = {
  gray100: '#F2F2F2',
  gray200: '#D9D9D9',
  gray300: '#808080',
  gray400: '#333333',
  gray500: '#262626',
  gray600: '#1A1A1A',
  gray700: '#0D0D0D',
  blue: '#4EA8DE',
  blueDark: '#1E6F9F',
  purple: '#8284FA',
  purpleDark: '#5E60CE',
  danger: '#E25858',
  white: '#FFFFFF',
} as const;

export type ColorToken = keyof typeof colors;
