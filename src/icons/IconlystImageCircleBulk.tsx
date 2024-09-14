import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.221 16.173c1.272-1.054 2.599-.496 3.666-.047.624.262 1.212.51 1.777.51.514 0 1.167-.918 1.743-1.728.808-1.135 1.723-2.421 3.066-2.421 1.703 0 3.218 1.216 4.258 2.218.164.158.437.09.491-.131.18-.729.278-1.49.278-2.273 0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5c0 2.054.662 3.952 1.774 5.507.115.16.35.16.473.004a15.6 15.6 0 0 1 1.474-1.64"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.967 7.875c1.173 0 2.127.954 2.13 2.126v.003a2.13 2.13 0 0 1-2.13 2.128 2.13 2.13 0 0 1-2.128-2.128 2.13 2.13 0 0 1 2.128-2.129M14.63 15.778c.596-.84 1.273-1.79 1.844-1.79 1.496 0 2.74 1.286 3.745 2.323l.105.109c.09.092.11.231.05.344-1.601 2.993-4.75 5.038-8.374 5.038A9.45 9.45 0 0 1 5.73 19.42a.29.29 0 0 1-.039-.392c.472-.627.987-1.219 1.524-1.735.483-.4.984-.25 2.09.215l.005.002c.697.293 1.488.626 2.354.626 1.286 0 2.14-1.2 2.965-2.36"
    />
  </Svg>
);
export default IconlystImageCircleBulk;
