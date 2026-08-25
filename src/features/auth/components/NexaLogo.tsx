import Svg, { Defs, LinearGradient as SvgGradient, Path, Rect, Stop } from 'react-native-svg';

export function NexaLogo({ size = 58 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <Defs>
        <SvgGradient id="logoGradient" x1="4" y1="3" x2="51" y2="54" gradientUnits="userSpaceOnUse">
          <Stop stopColor="#4F7BFF" />
          <Stop offset="1" stopColor="#A855F7" />
        </SvgGradient>
      </Defs>
      <Rect width="56" height="56" rx="18" fill="url(#logoGradient)" />
      <Path d="M17 37V19H21.8L34.5 32.2V19H39V37H34.5L21.5 23.5V37H17Z" fill="white" />
    </Svg>
  );
}
