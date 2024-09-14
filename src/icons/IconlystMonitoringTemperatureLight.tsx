import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitoringTemperatureLight = ({
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
      d="M7.09 6v6.022c-1.207.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.792-3.065-2-3.978V6a3 3 0 0 0-6 0M16.577 4.782h2.563m-2.563 2.714h2.563m-2.563 2.714h2.563"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.565 16a1.473 1.473 0 1 1-2.946 0 1.473 1.473 0 0 1 2.946 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.09 7.727v6.8"
    />
  </Svg>
);
export default IconlystMonitoringTemperatureLight;
