import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareFireBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.216 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.223 5.285-5.53V8.03c0-3.308-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.818 14.682a4.02 4.02 0 0 1-2.992 2.205 4.6 4.6 0 0 1-.949.102c-1.547 0-2.937-.824-3.697-2.254-.905-1.706-.575-3.679.84-5.028.181-.186.411-.414.611-.553a.75.75 0 0 1 1.179.615c.036.145.255.675.446 1.032.312-.45.44-1.581.261-2.944a.749.749 0 0 1 1.092-.762c1.478.773 2.54 1.816 3.154 3.101.718 1.395.742 3.122.055 4.486m-4.499-2.218c1.127-.3 1.747-1.464 1.78-3.266a4.8 4.8 0 0 1 1.32 1.664c.512.996.534 2.201.06 3.145-.274.542-.827 1.224-1.915 1.402l-.039.008c-1.512.334-2.572-.54-3.02-1.386-.412-.777-.536-1.902.244-2.9.213.46.476.9.722 1.11a.97.97 0 0 0 .848.223"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareFireBulk;
