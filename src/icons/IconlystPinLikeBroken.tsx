import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLikeBroken = ({
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
      d="M9.153 10.667c-.363-1.137.062-2.436 1.255-2.82a2.04 2.04 0 0 1 1.842.31 2.05 2.05 0 0 1 1.84-.31c1.192.384 1.62 1.683 1.256 2.82-.566 1.801-3.096 3.19-3.096 3.19s-2.51-1.368-3.097-3.19"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.776 10.527a7.526 7.526 0 1 0-15.052 0C4.724 15.882 11.046 21 12.25 21c.895 0 4.618-2.828 6.47-6.478"
    />
  </Svg>
);
export default IconlystPinLikeBroken;
