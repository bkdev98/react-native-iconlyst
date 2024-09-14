import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryptoOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.564 8.857a6.576 6.576 0 0 1 6.573-6.574 6.57 6.57 0 0 1 6.574 6.574c0 .189-.01.366-.018.52v.005a.75.75 0 0 1-1.498-.085c.009-.16.016-.298.016-.44a5.07 5.07 0 0 0-5.074-5.074 5.076 5.076 0 0 0-5.073 5.074 5.08 5.08 0 0 0 5.073 5.073c.132 0 .256-.006.401-.014l.044-.002a.75.75 0 1 1 .076 1.498l-.046.003a6.58 6.58 0 0 1-7.048-6.557"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.855 15.144a6.572 6.572 0 1 1 13.145 0 6.572 6.572 0 0 1-13.145 0m6.573-5.072a5.072 5.072 0 1 0 0 10.144 5.072 5.072 0 0 0 0-10.144M3.097 15.63a.75.75 0 0 1 .887.58 5.08 5.08 0 0 0 3.314 3.76.75.75 0 1 1-.488 1.42 6.58 6.58 0 0 1-4.294-4.873.75.75 0 0 1 .581-.888M16.518 2.909a.75.75 0 0 1 .953-.466 6.58 6.58 0 0 1 4.294 4.873.75.75 0 1 1-1.469.306 5.08 5.08 0 0 0-3.313-3.76.75.75 0 0 1-.466-.953"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryptoOutline;
