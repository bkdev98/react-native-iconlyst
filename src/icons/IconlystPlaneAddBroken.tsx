import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneAddBroken = ({
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
      d="M21.5 18.304h-4.258m2.128 2.173v-4.342M5.4 20.335h8.382M4.089 13.12c1.237-.513 3.68-1.562 4.939-2.085L6.72 5.446c.625-.223 1.196-.481 1.796-.625.7-.168 1.302.15 1.817.6a188 188 0 0 1 3.515 3.137c.291.268.522.294.871.14 1.003-.442 2.01-.884 3.042-1.255 1.192-.431 2.89-.476 3.312 1.028.332 1.186-.69 2.197-1.696 2.621a942 942 0 0 1-4.516 1.893"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 11.71c.09.215.438 1.061.528 1.274 1.016 2.383 2.911 3.222 5.306 2.262q1.1-.442 2.197-.89"
    />
  </Svg>
);
export default IconlystPlaneAddBroken;