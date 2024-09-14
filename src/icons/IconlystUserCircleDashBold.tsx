import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleDashBold = ({
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
      fillRule="evenodd"
      d="M3.177 13.33a.75.75 0 0 1-.747-.693 9.7 9.7 0 0 1 .322-3.287.75.75 0 1 1 1.447.394 8.2 8.2 0 0 0-.273 2.78.75.75 0 0 1-.691.805zM4.927 7.382a.75.75 0 0 1-.604-1.193 9.7 9.7 0 0 1 1.573-1.682.749.749 0 1 1 .967 1.146 8.2 8.2 0 0 0-1.33 1.422.75.75 0 0 1-.606.307M7 20.113a.74.74 0 0 1-.426-.134 9.77 9.77 0 0 1-3.378-4.096.751.751 0 0 1 1.373-.606 8.3 8.3 0 0 0 2.859 3.47.75.75 0 0 1 .189 1.043.75.75 0 0 1-.617.323M12.162 21.75a9.7 9.7 0 0 1-2.135-.237.75.75 0 1 1 .328-1.463 8.26 8.26 0 0 0 6.895-1.553.75.75 0 0 1 .926 1.18 9.7 9.7 0 0 1-6.014 2.073M19.796 17.473a.752.752 0 0 1-.637-1.145 8.2 8.2 0 0 0 1.234-4.636c-.176-4.55-4.021-8.107-8.573-7.937-.407.041-.761-.306-.777-.72a.75.75 0 0 1 .72-.778c5.34-.206 9.92 4 10.128 9.377a9.7 9.7 0 0 1-1.456 5.484.75.75 0 0 1-.64.355"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.112 11.97a2.876 2.876 0 0 0 2.873-2.874 2.876 2.876 0 0 0-2.873-2.873A2.876 2.876 0 0 0 9.24 9.096a2.876 2.876 0 0 0 2.873 2.874M12.113 12.951c-3.144 0-4.552 1.74-4.552 3.463a.473.473 0 0 0 .473.473l8.158-.01a.473.473 0 0 0 .471-.475c0-1.718-1.406-3.45-4.55-3.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCircleDashBold;
