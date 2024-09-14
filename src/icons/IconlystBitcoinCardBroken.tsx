import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCardBroken = ({
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
      d="M5.5 20.64c-1.232 0-1.999-.87-1.999-2.1v-3.322c0-1.231.77-2.1 1.998-2.1h5.078c1.232 0 1.998.869 1.998 2.1v3.321c0 1.231-.766 2.1-1.998 2.1H8.038M3.5 15.787h6.341M6.217 7.566 4.86 8.925 3.5 7.566M18.783 16.473l1.358-1.358 1.36 1.358M15.008 7.195h3.18a1.449 1.449 0 0 0-.019-2.898h-3.867"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.299 10.757h4.06a1.782 1.782 0 0 0 0-3.564h-.3M14.846 4.297v4.267M15.709 10.76v.934m2.48-.934v.934M15.709 3.361v.936m2.48-.936v.936M4.86 8.847V5.62A2.22 2.22 0 0 1 7.08 3.4h1.176M20.14 15.193v3.227a2.22 2.22 0 0 1-2.22 2.22h-1.176"
    />
  </Svg>
);
export default IconlystBitcoinCardBroken;
