import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldEditOutline = ({
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
      d="M12.288 3.75a8.26 8.26 0 0 0-8.26 8.26c0 4.34 3.335 7.9 7.589 8.242a.75.75 0 0 1-.121 1.496 9.763 9.763 0 0 1-8.968-9.738c0-5.383 4.367-9.76 9.76-9.76 4.988 0 9.09 3.738 9.678 8.563a.75.75 0 0 1-1.489.181 8.25 8.25 0 0 0-8.189-7.244"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.692 4.303c.57-1.084 1.429-2.053 2.596-2.053 1.172 0 2.03.968 2.6 2.053.6 1.143 1.042 2.703 1.284 4.47.107.732.174 1.498.203 2.29a.75.75 0 0 1-1.499.055 20 20 0 0 0-.189-2.131l-.001-.008c-.227-1.663-.633-3.04-1.126-3.978-.522-.996-1-1.251-1.272-1.251-.266 0-.744.254-1.268 1.251-.494.938-.902 2.316-1.13 3.978v.006a21 21 0 0 0-.208 3.024c0 1.073.072 2.096.208 3.033v.005c.314 2.275 1.281 4.417 2.221 5.448a.75.75 0 1 1-1.109 1.01c-1.196-1.313-2.254-3.765-2.597-6.25a23 23 0 0 1-.223-3.246c0-1.139.077-2.224.223-3.236.242-1.768.687-3.328 1.287-4.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.528 12.02a.75.75 0 0 1 .75-.75h8.602a.75.75 0 0 1 0 1.5H3.278a.75.75 0 0 1-.75-.75M19.065 13.849a.447.447 0 0 0-.625.095l-3.646 4.97-.001.002a.09.09 0 0 0-.014.074l.312 1.185c.01.04.048.068.089.066l1.226-.057a.09.09 0 0 0 .067-.036l3.646-4.97a.447.447 0 0 0-.095-.624zm-1.834-.793a1.947 1.947 0 0 1 2.722-.416l.958.705a1.946 1.946 0 0 1 .417 2.72m0 0-3.647 4.973a1.59 1.59 0 0 1-1.206.645l-1.225.056a1.59 1.59 0 0 1-1.61-1.182l-.312-1.187a1.59 1.59 0 0 1 .257-1.343l3.646-4.97"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.347 14.26a.75.75 0 0 1 1.048-.161l2.888 2.122a.75.75 0 1 1-.888 1.209l-2.888-2.123a.75.75 0 0 1-.16-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldEditOutline;
