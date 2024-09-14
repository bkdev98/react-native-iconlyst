import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMountaineerOutline = ({
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
      fill={props.color}
      d="M7.359 21.747a.75.75 0 0 1-.685-1.055l1.666-3.747a.75.75 0 0 1 1.37.609L8.048 21.3a.75.75 0 0 1-.688.446M11.268 7.653a2.7 2.7 0 1 1 2.7-2.7 2.707 2.707 0 0 1-2.7 2.7m0-3.908a1.2 1.2 0 1 0 1.2 1.2 1.205 1.205 0 0 0-1.2-1.2M13.23 21.744a.75.75 0 0 1-.75-.735v-.265a8.24 8.24 0 0 0-.652-3.791 5.6 5.6 0 0 0-1.181-1.283 4.16 4.16 0 0 1-1.852-3.354 2.98 2.98 0 0 1 2.219-2.811 4.07 4.07 0 0 1 2.41.247q.537.201 1.107.268a3.23 3.23 0 0 0 1.654-.6c.205-.115.41-.231.616-.334a.75.75 0 1 1 .67 1.342c-.183.09-.364.194-.546.3-.73.504-1.595.78-2.482.79a6 6 0 0 1-1.481-.34 2.84 2.84 0 0 0-1.556-.226 1.5 1.5 0 0 0-1.113 1.447c-.047.855.483 1.375 1.354 2.152a6.8 6.8 0 0 1 1.487 1.662 9.36 9.36 0 0 1 .847 4.5v.264a.75.75 0 0 1-.734.765z"
    />
    <Path
      fill={props.color}
      d="M17.13 21.746a.75.75 0 0 1-.75-.75V8.292a.75.75 0 1 1 1.5 0v12.7a.75.75 0 0 1-.75.754"
    />
  </Svg>
);
export default IconlystMountaineerOutline;
