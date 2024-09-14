import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPDFBadgeTwoTone = ({
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
      d="M6.566 4.176h11.867c2.507 0 4.067 1.77 4.067 4.274v7.103c0 2.504-1.56 4.274-4.068 4.274H6.566c-2.506 0-4.066-1.77-4.066-4.274V8.45c0-2.504 1.568-4.274 4.066-4.274"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.47 12.831H6.95a1.637 1.637 0 1 0 0-3.272H5.47v4.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.154 14.449a2.443 2.443 0 0 0 2.446-2.447 2.444 2.444 0 0 0-2.447-2.447H10.93v4.894z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.529 9.555h-2.651v4.894m2.243-2.04h-2.243"
    />
  </Svg>
);
export default IconlystPDFBadgeTwoTone;
