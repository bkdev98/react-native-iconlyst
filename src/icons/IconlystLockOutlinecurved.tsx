import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOutlinecurved = ({
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
      fill={props.color}
      d="M12 17.464a.75.75 0 0 1-.75-.75v-2.22a.75.75 0 0 1 1.5 0v2.22a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.31 9.262c2.198 1.001 3.1 2.949 3.1 6.17 0 5.12-2.279 7.022-8.41 7.022-6.13 0-8.41-1.902-8.41-7.022 0-3.22.903-5.168 3.1-6.17v-1.69a5.285 5.285 0 0 1 5.24-5.234c1.438.007 2.762.518 3.777 1.508a5.27 5.27 0 0 1 1.603 3.737zm-1.104 1.14q.094.05.202.073c1.866.72 2.502 2.214 2.502 4.958 0 4.284-1.55 5.522-6.91 5.522s-6.91-1.238-6.91-5.522c0-2.745.637-4.239 2.504-4.958a.7.7 0 0 0 .198-.072c1.028-.35 2.402-.492 4.208-.492s3.179.141 4.206.491M8.19 8.767V7.584a3.79 3.79 0 0 1 3.76-3.746 3.79 3.79 0 0 1 2.71 1.083 3.78 3.78 0 0 1 1.15 2.67v1.176c-1.058-.243-2.32-.355-3.81-.355s-2.752.112-3.81.355"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockOutlinecurved;
