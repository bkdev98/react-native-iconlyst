import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLikeTwoTone = ({
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
      d="M4.974 10.527C4.974 15.882 11.295 21 12.5 21c1.204 0 7.526-5.118 7.526-10.473a7.526 7.526 0 1 0-15.052 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.403 10.667c-.363-1.137.062-2.436 1.255-2.82a2.04 2.04 0 0 1 1.842.31 2.05 2.05 0 0 1 1.84-.31c1.192.384 1.62 1.683 1.256 2.82-.566 1.801-3.096 3.19-3.096 3.19s-2.51-1.368-3.097-3.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinLikeTwoTone;
