import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBoldsharp = ({
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
      d="M19.358 10.239h-1.5l-.009-1.5h1.509zm-7.109 6.404a3.433 3.433 0 0 1-3.43-3.429 3.433 3.433 0 0 1 3.43-3.429 3.43 3.43 0 0 1 3.428 3.429 3.43 3.43 0 0 1-3.428 3.429m5.046-10.445-1.732-2.706H8.935L7.204 6.198H2.5v14.31H22V6.198z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraBoldsharp;
