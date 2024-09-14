import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKotlinOutline = ({
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
      d="M6.89 4.75c-.69 0-1.25.56-1.25 1.25v12q0 .09.013.177L18.211 5.619a.509.509 0 0 0-.36-.869zm-.176 14.488q.086.012.177.012h10.935a.52.52 0 0 0 .367-.887l-5.302-5.302zM13.95 12l5.321-5.32a2.009 2.009 0 0 0-1.42-3.43H6.89A2.75 2.75 0 0 0 4.14 6v12a2.75 2.75 0 0 0 2.75 2.75h10.935a2.02 2.02 0 0 0 1.428-3.447z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.421 3.47a.75.75 0 0 1 0 1.06l-8 8a.75.75 0 0 1-1.06-1.06l8-8a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKotlinOutline;
