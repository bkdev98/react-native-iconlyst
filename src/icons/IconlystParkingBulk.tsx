import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystParkingBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.076 8.041a.75.75 0 0 1 .75-.75h3.342a2.939 2.939 0 1 1 0 5.877h-2.592v2.79a.75.75 0 1 1-1.5 0zm1.5 3.627h2.592a1.439 1.439 0 1 0 0-2.877h-2.592z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystParkingBulk;
