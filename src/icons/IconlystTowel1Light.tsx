import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel1Light = ({
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
      d="M9.81 8.23c3.61 0 6.538-1.17 6.538-2.615C16.348 4.171 13.42 3 9.81 3 6.2 3 3.271 4.171 3.271 5.615S6.2 8.231 9.81 8.231"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.348 5.615v12.77C16.348 19.83 13.42 21 9.81 21c-3.61 0-6.539-1.17-6.539-2.615V5.615"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.207 3.001h10.506l.015 15.213h-4.382M8.688 5.46q1.14.31 2.26 0M11.486 12.38v1.132m0-5.368v1.725m0 9.599v1.446m0-4.849v1.092"
    />
  </Svg>
);
export default IconlystTowel1Light;
