import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHeartOutline = ({
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
      d="M11.993 21.303a.8.8 0 0 1-.317-.07c-.3-.141-7.392-3.5-9.049-8.812-1.077-3.36.122-7.593 4-8.853a6.5 6.5 0 0 1 3.029-.207c.852.194 1.65.575 2.338 1.115a5.84 5.84 0 0 1 2.341-1.123 6.5 6.5 0 0 1 3.028.214c3.874 1.247 5.069 5.483 3.986 8.859-1.755 5.36-8.741 8.667-9.038 8.806a.8.8 0 0 1-.318.07M8.573 4.77a5 5 0 0 0-1.494.226c-3.089 1.005-3.865 4.342-3.022 6.97 1.277 4.092 6.578 7.048 7.936 7.748 1.347-.695 6.575-3.614 7.928-7.751.845-2.633.074-5.972-3.017-6.97a5 5 0 0 0-2.321-.163 5.7 5.7 0 0 0-2.139 1.175.75.75 0 0 1-.9 0A5.7 5.7 0 0 0 9.4 4.836a5 5 0 0 0-.827-.065"
    />
    <Path
      fill={props.color}
      d="M11.99 13.294a2.155 2.155 0 1 1 .001-4.31 2.155 2.155 0 0 1 0 4.31m0-2.81a.655.655 0 1 0 .001 1.31.655.655 0 0 0 0-1.31"
    />
    <Path
      fill={props.color}
      d="M11.988 15.58a.75.75 0 0 1-.75-.75v-2.232a.75.75 0 1 1 1.5 0v2.232a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystLockHeartOutline;
