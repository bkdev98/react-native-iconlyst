import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArkaneBulk = ({
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
      d="M16.717 2.505H8.283C5.123 2.505 3 4.728 3 8.035v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.44 17.365a.748.748 0 0 0 .685-1.054l-3.808-8.568A2.01 2.01 0 0 0 12.5 6.555c-.775 0-1.505.477-1.815 1.185l-3.81 8.57a.75.75 0 1 0 1.372.61l3.81-8.574c.148-.338.736-.34.888.004l3.809 8.57a.75.75 0 0 0 .686.445"
    />
    <Path
      fill={props.color}
      d="M11.676 13.255h1.646a.75.75 0 0 0 0-1.5h-1.646a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystArkaneBulk;
