import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapLocationLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.639 5.586v3.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.396 20.703c-.577 0-3.604-2.451-3.604-5.016a3.604 3.604 0 1 1 7.208 0c0 2.565-3.027 5.016-3.604 5.016"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.396 15.771v-.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.242 19.538-2.142-.78a1.5 1.5 0 0 0-1.117.038l-3.53 1.567A1.033 1.033 0 0 1 3 19.418V6.878A1.9 1.9 0 0 1 4.129 5.14L7.983 3.43c.353-.157.753-.17 1.116-.038l5.632 2.046c.363.132.764.118 1.117-.039l3.525-1.567a1.032 1.032 0 0 1 1.455.945V9.37M8.533 18.668V3.316"
    />
  </Svg>
);
export default IconlystMapLocationLight;
