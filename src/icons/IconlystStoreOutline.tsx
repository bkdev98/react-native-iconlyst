import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreOutline = ({
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
      d="M3.496 6.918a2.115 2.115 0 0 1 2.078-1.719H18.94c1.019 0 1.892.725 2.079 1.727l.62 3.31a1.682 1.682 0 0 1-1.642 2.048H4.503c-1.079 0-1.876-1-1.641-2.05zm2.078-.219a.615.615 0 0 0-.604.5l-.638 3.33-.006.031a.182.182 0 0 0 .177.224h15.495c.117 0 .204-.11.177-.224l-.007-.033-.622-3.326a.614.614 0 0 0-.605-.502z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.505 10.781a.75.75 0 0 1 .75.75v7.615c0 .61.493 1.102 1.1 1.102h11.79c.607 0 1.1-.493 1.1-1.102v-7.615a.75.75 0 1 1 1.5 0v7.615a2.6 2.6 0 0 1-2.6 2.602H6.355a2.6 2.6 0 0 1-2.6-2.602v-7.615a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.963 15.984a.75.75 0 0 1 .75-.75h1.111a.75.75 0 0 1 0 1.5H7.713a.75.75 0 0 1-.75-.75M11.527 15.05a.75.75 0 0 1 .75-.75h3.993a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-5.2h-2.493V21a.75.75 0 1 1-1.5 0zM6.751 3a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5H7.5a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStoreOutline;
