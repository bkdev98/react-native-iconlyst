import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSwapBroken = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.025 8.618-1.851 3.4h3.68l-1.849 3.402M3 17.648l2.728.631.628-2.714"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.735 18.017a8.68 8.68 0 0 1-2.12-8.36M5.818 5.868a8.67 8.67 0 0 1 7.7-2.43M21 6.352l-2.728-.63-.628 2.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.265 5.984a8.68 8.68 0 0 1 2.118 8.37M18.182 18.133a8.67 8.67 0 0 1-7.7 2.43"
    />
  </Svg>
);
export default IconlystFlashSwapBroken;
