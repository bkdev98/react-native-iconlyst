import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftOutline = ({
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
      d="M8.644 3.75c-.667 0-1.251.567-1.251 1.321s.584 1.32 1.251 1.32h2.61a7 7 0 0 0-.42-.968c-.513-.964-1.22-1.673-2.19-1.673m3.603 3.392.736-.143v-.002l-.001-.004-.003-.013-.009-.043-.034-.15a8.934 8.934 0 0 0-.777-2.069C11.57 3.613 10.475 2.25 8.644 2.25c-1.544 0-2.751 1.288-2.751 2.821s1.208 2.82 2.751 2.82h3.603A.75.75 0 0 0 12.983 7z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.334 4.719c.589-1.107 1.684-2.469 3.515-2.469 1.543 0 2.751 1.288 2.751 2.821s-1.208 2.82-2.751 2.82h-3.603A.75.75 0 0 1 11.51 7l.736.142L11.51 7v-.003l.001-.004.003-.013.009-.043q.011-.054.034-.15a8.934 8.934 0 0 1 .777-2.069m.904 1.673h2.61c.668 0 1.252-.567 1.252-1.32 0-.755-.584-1.322-1.251-1.322-.971 0-1.678.709-2.19 1.673a7 7 0 0 0-.42.969"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.263 7.729C5.02 6.872 6.102 6.39 7.376 6.39h9.745c1.274 0 2.356.48 3.112 1.338.747.847 1.124 2.003 1.124 3.281v6.118c0 1.28-.38 2.436-1.127 3.283-.756.856-1.838 1.338-3.109 1.338H7.375c-1.274 0-2.356-.481-3.112-1.339-.747-.847-1.124-2.003-1.124-3.282V11.01c0-1.278.377-2.434 1.124-3.281m1.125.992c-.458.52-.75 1.3-.75 2.29v6.117c0 .99.292 1.77.75 2.29.45.51 1.111.83 1.987.83h9.746c.872 0 1.533-.319 1.984-.83.46-.521.752-1.3.752-2.29V11.01c0-.99-.29-1.769-.75-2.29-.45-.51-1.11-.83-1.986-.83H7.376c-.876 0-1.537.32-1.988.83"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.244 11.164a.75.75 0 0 1 .75.75v9.083a.75.75 0 1 1-1.5 0v-9.083a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.139 11.914a.75.75 0 0 1 .75-.75H20.61a.75.75 0 1 1 0 1.5H3.89a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGiftOutline;
