import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChargeBatteryOutline = ({
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
      d="M10.732 21.56a4.7 4.7 0 0 1-3.42-1.256 4.9 4.9 0 0 1-1.3-3.568v-7.24c0-2.98 1.816-4.83 4.739-4.83h3.314a4.473 4.473 0 0 1 4.81 4.83v.7a.75.75 0 1 1-1.5 0v-.7a3 3 0 0 0-3.31-3.33h-3.31c-2.676 0-3.238 1.81-3.238 3.33v7.24a3.45 3.45 0 0 0 .857 2.506 3.22 3.22 0 0 0 2.362.817h1.1a.75.75 0 0 1 0 1.5h-1.104"
    />
    <Path
      fill={props.color}
      d="M15.355 6.317a.75.75 0 0 1-.75-.75v-.792c0-.6-.1-1.025-1.328-1.025h-1.69c-1.2 0-1.287.425-1.287 1.025v.784a.75.75 0 1 1-1.5 0v-.784c0-1.152.483-2.525 2.787-2.525h1.69c2.337 0 2.828 1.373 2.828 2.525v.792a.75.75 0 0 1-.75.75M15.875 19.594a3.87 3.87 0 0 1-3.88-3.87v-1.077a1.444 1.444 0 0 1 1.442-1.442h4.856a1.444 1.444 0 0 1 1.442 1.442v.943a3.975 3.975 0 0 1-3.492 3.987 4 4 0 0 1-.368.017m2.36-4.947-4.8.058.058 1.02a2.374 2.374 0 0 0 2.606 2.358 2.46 2.46 0 0 0 2.134-2.493z"
    />
    <Path
      fill={props.color}
      d="M15.866 21.75a.75.75 0 0 1-.75-.75v-2.155a.75.75 0 1 1 1.5 0V21a.75.75 0 0 1-.75.75M17.435 14.658a.75.75 0 0 1-.75-.75v-1.342a.75.75 0 0 1 1.5 0v1.342a.75.75 0 0 1-.75.75m-3.137.048a.75.75 0 0 1-.75-.75v-1.39a.75.75 0 1 1 1.5 0v1.39a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystChargeBatteryOutline;
