import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityBrokencurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.148 15.437 2.993-3.889 3.414 2.68 2.929-3.78M21.82 4.855a1.922 1.922 0 1 1-1.922-1.922"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.361 21.851c-4.187-.8-5.68-3.389-5.68-8.965 0-6.937 2.312-9.25 9.25-9.25 1.11 0 2.1.06 2.982.187M20.986 9.852c.133.895.194 1.903.194 3.034 0 6.938-2.312 9.25-9.25 9.25"
    />
  </Svg>
);
export default IconlystActivityBrokencurved;
