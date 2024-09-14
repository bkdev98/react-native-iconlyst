import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraBulksharp = ({
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
      d="m17.295 6.198-1.732-2.706H8.935L7.204 6.198H2.5v14.31H22V6.198z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.858 10.239h1.5v-1.5H17.85zM8.82 13.214a3.433 3.433 0 0 0 3.43 3.429 3.43 3.43 0 0 0 3.427-3.429 3.43 3.43 0 0 0-3.428-3.429 3.433 3.433 0 0 0-3.43 3.429"
    />
  </Svg>
);
export default IconlystCameraBulksharp;
