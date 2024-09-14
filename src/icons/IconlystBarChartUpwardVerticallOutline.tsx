import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartUpwardVerticallOutline = ({
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
      d="M4.5 12.867a.25.25 0 0 0-.25.25v6.001c0 .138.112.25.25.25h4.25v-6.5zm-1.75.25c0-.966.783-1.75 1.75-1.75h5a.75.75 0 0 1 .75.75v8.001a.75.75 0 0 1-.75.75h-5a1.75 1.75 0 0 1-1.75-1.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.5 8.868a.25.25 0 0 0-.25.25v10.25h4.5v-10.5zm-1.75.25c0-.966.783-1.75 1.75-1.75h5a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.5 4.868a.25.25 0 0 0-.251.25V19.37h4.25a.25.25 0 0 0 .25-.25v-14a.25.25 0 0 0-.25-.25zm-1.751.25c0-.966.783-1.75 1.75-1.75h4c.967 0 1.75.784 1.75 1.75V19.12a1.75 1.75 0 0 1-1.75 1.75h-5a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartUpwardVerticallOutline;
