import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniswapTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.795 10.068a4.64 4.64 0 0 0-1.992 1.992c-.374.869-.362 1.359-1.255 2.486a5 5 0 0 0-.729 1.06c-.705 1.506.191 3.75 1.897 4.048.613.18 1.593-.227 2.012-.506a6.2 6.2 0 0 1 2.713-1.283c.151-.024.601-.12 1.111-.227 1.773-.359 3.586-1.992 3.586-3.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.024 12.392a1.05 1.05 0 0 1 1.031-1.06M13.123 9.748h.399a8.18 8.18 0 0 1 7.258 4.594"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.605 9.35c-1.439-2.637-4.124-3.063-6.443-2.653-1.06-1.227-1.68-1.892-3.585-1.86-.26 1.852.613 3.984.613 3.984L3.25 3l3.555 7.757"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.255 21c-1.594-1.594-4.24-.808-4.24-.808M17.672 15.35s1.78 2.523 1.78 5.434"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUniswapTwoTone;
