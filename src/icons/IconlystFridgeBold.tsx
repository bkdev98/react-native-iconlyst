import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFridgeBold = ({
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
      d="M13.28 6.198h1.76a.75.75 0 0 1 0 1.5h-1.76a.75.75 0 0 1 0-1.5m4.868 3.041a.3.3 0 0 0 .3-.3v-3.05c0-1.996-1.335-3.389-3.248-3.389H8.8c-1.912 0-3.247 1.393-3.247 3.389v3.05a.3.3 0 0 0 .3.3zM15.04 13.944h-1.76a.75.75 0 0 1 0-1.5h1.76a.75.75 0 0 1 0 1.5m-9.188-3.205a.3.3 0 0 0-.3.3v7.071c0 1.996 1.335 3.39 3.247 3.39h6.4c1.943 0 3.249-1.363 3.249-3.39v-7.071a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFridgeBold;
