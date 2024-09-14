import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRocketBroken = ({
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
      d="m7.067 13.129-2.87 3.366v2.656a33 33 0 0 1 4.047-.769m7.521 0c1.36.172 2.71.429 4.038.77v-2.657l-2.92-3.366"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.353 21a16 16 0 0 1-.924-2.024 24 24 0 0 1-1.401-6.558S6.804 5.218 12 3c5.117 2.13 4.971 9.418 4.971 9.418a23.6 23.6 0 0 1-1.4 6.558A9.7 9.7 0 0 1 14.655 21h-2.652"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.03 14.286a1.391 1.391 0 1 1 1.391-1.391M11.222 7.66h4.806"
    />
  </Svg>
);
export default IconlystRocketBroken;
