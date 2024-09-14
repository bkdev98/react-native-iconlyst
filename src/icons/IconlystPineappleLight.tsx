import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPineappleLight = ({
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
      d="M5.414 13.098c1.662-2.878 3.925-6.814 7.68-4.646l1.191.688c3.755 2.168 1.478 6.096-.184 8.974-2.997 5.191-11.788.355-8.687-5.016M9.237 8.574l5.591 8.284M6.306 11.73l5.592 8.284M6.079 12.071l9.792-.687M5.23 16.858l9.97-.7"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.367 7.847c.374-.65.82-2.27-.392-3.54 1.019.132 2.937.826 3.626 2.561M15.921 10.442c.41-.381 1.561-1.162 2.886-1.233-.18-.374-.8-1.214-1.83-1.58.307-.504 1.19-1.508 2.262-1.499-.584-.543-2.11-1.493-3.54-.95-.11-.47-.565-1.564-1.509-2.18"
    />
  </Svg>
);
export default IconlystPineappleLight;
