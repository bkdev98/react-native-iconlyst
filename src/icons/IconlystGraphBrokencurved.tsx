import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBrokencurved = ({
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
      d="M17.15 10.598c1.462-.124 2.952-.458 3.535-.917 2.858-2.25-4.529-8.837-6.789-6.235-.609.701-.903 4.594-.448 6.192"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.198 20.222a7.7 7.7 0 0 1-4.031-6.77c0-5.3 5.229-8.69 6.728-7.192.863.863-.109 4.924 1.439 6.472 1.548 1.55 5.937.071 7.021 1.155s-1.79 7.265-7.486 7.265"
    />
  </Svg>
);
export default IconlystGraphBrokencurved;
