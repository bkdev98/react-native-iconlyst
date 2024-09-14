import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.491 11.75H21.77v1.5H7.491z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.477 8.164 22.83 12.5l-4.354 4.337-1.059-1.063 3.288-3.274-3.288-3.273zM14.005 2.5v6.125h-1.5V4H3.481v17h9.024v-4.625h1.5V22.5H1.981v-20z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogoutOutlinesharp;
