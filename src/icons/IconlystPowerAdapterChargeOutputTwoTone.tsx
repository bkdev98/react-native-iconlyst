import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterChargeOutputTwoTone = ({
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
      d="M18.287 12.322h-7.83a2.4 2.4 0 0 0-2.401 2.402v3.874a2.4 2.4 0 0 0 2.401 2.401h7.83c1.326 0 2.4-1.075 2.4-2.401v-3.874a2.4 2.4 0 0 0-2.4-2.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.115 14.92-.943 1.73h2.137l-.942 1.734"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.493 6.782h-1.76A1.233 1.233 0 0 1 14.5 5.548V4.055h4.227v1.493c0 .681-.553 1.234-1.234 1.234"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.751 6.781a2.4 2.4 0 0 1-2.4 2.4H8.049a3.737 3.737 0 0 0-3.736 3.738 3.53 3.53 0 0 0 3.529 3.53h.207M18.135 3v1.054m-3 0V3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPowerAdapterChargeOutputTwoTone;
