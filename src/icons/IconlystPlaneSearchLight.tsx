import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneSearchLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.589 13.12c1.237-.513 3.68-1.562 4.938-2.085L6.22 5.446c.626-.223 1.197-.481 1.797-.625.7-.168 1.301.15 1.817.6a188 188 0 0 1 3.514 3.137c.292.268.523.294.872.14 1.003-.442 2.01-.884 3.042-1.255 1.191-.431 2.89-.476 3.311 1.028.333 1.186-.69 2.197-1.695 2.621a623 623 0 0 1-10.043 4.154c-2.395.96-4.29.121-5.306-2.261-.09-.213-.438-1.06-.528-1.274M19.642 19.115a2.505 2.505 0 1 1-3.541-3.543 2.505 2.505 0 0 1 3.541 3.543m0 0L21 20.472M4.916 20.473h7.64"
    />
  </Svg>
);
export default IconlystPlaneSearchLight;
