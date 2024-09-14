import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel1TwoTone = ({
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
      d="M10.31 8.23c3.61 0 6.538-1.17 6.538-2.615C16.848 4.171 13.92 3 10.31 3 6.7 3 3.771 4.171 3.771 5.615S6.7 8.231 10.31 8.231"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.848 5.615v12.77C16.848 19.83 13.92 21 10.31 21c-3.61 0-6.539-1.17-6.539-2.615V5.615"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.707 3.001h10.506l.015 15.213h-4.382M9.188 5.46q1.14.31 2.26 0M11.986 12.38v1.132m0-5.368v1.725m0 9.599v1.446m0-4.849v1.092"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTowel1TwoTone;
