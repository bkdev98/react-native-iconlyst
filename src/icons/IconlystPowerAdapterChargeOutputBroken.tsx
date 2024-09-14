import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerAdapterChargeOutputBroken = ({
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
      d="M13.872 21H9.957a2.4 2.4 0 0 1-2.401-2.402v-3.874a2.4 2.4 0 0 1 2.401-2.402h7.83c1.326 0 2.4 1.075 2.4 2.402v3.874a2.4 2.4 0 0 1-2.4 2.401h-.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.615 14.92-.943 1.73h2.137l-.942 1.734"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.993 6.782h-1.76A1.233 1.233 0 0 1 14 5.548V4.055h4.227v1.493c0 .681-.553 1.234-1.234 1.234"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.25 6.781a2.4 2.4 0 0 1-2.4 2.4H10.7M7.549 9.182a3.737 3.737 0 0 0-3.737 3.737 3.53 3.53 0 0 0 3.53 3.53h.207M17.635 3v1.054m-3 0V3"
    />
  </Svg>
);
export default IconlystPowerAdapterChargeOutputBroken;
