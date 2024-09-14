import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorChargeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Rect
      width={14.969}
      height={14.931}
      x={4.515}
      y={4.535}
      fill={props.color}
      opacity={0.4}
      rx={4}
    />
    <Path
      fill={props.color}
      d="M9.613 2.253a.75.75 0 0 1 .75.75V4.53h-1.5V3.003a.75.75 0 0 1 .75-.75M13.637 3.003V4.53h1.5V3.003a.75.75 0 0 0-1.5 0M19.485 10.366V9.018l-.002-.152H21a.75.75 0 0 1 0 1.5zM19.485 14.99l-.002.143H21a.75.75 0 0 0 0-1.5h-1.515zM15.137 19.472v1.525a.75.75 0 0 1-1.5 0v-1.525zM10.363 19.472h-1.5v1.525a.75.75 0 0 0 1.5 0zM4.51 13.634v1.355q0 .073.002.144H3a.75.75 0 0 1 0-1.5zM4.51 9.018q0-.075.002-.15H3a.75.75 0 1 0 0 1.5h1.51zM14.35 12.38l-1.71 2.94c-.14.24-.39.38-.65.38-.13 0-.26-.04-.38-.1a.75.75 0 0 1-.27-1.03l1.06-1.82h-2.1c-.27 0-.52-.14-.65-.38a.72.72 0 0 1 0-.75l1.71-2.94a.75.75 0 0 1 1.02-.28c.36.21.48.67.27 1.03l-1.05 1.82h2.1c.27 0 .52.14.65.38.13.23.13.51 0 .75"
    />
  </Svg>
);
export default IconlystCpuProcessorChargeBulk;
