import LogoSvg from '@/assets/logo.svg';

const LOGO_WIDTH = 118;
const LOGO_HEIGHT = 32;

type LogoProps = {
  width?: number;
  height?: number;
};

export function Logo({ width = LOGO_WIDTH, height = LOGO_HEIGHT }: LogoProps) {
  return <LogoSvg width={width} height={height} />;
}
