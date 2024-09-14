import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapOutlinesharp = ({
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
      d="M16.155 20.9V5.46h1.5V20.9z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.655 20.15c0-2.945-2.585-5.345-5.346-5.345h-.75v1.5h.75c1.964 0 3.846 1.76 3.846 3.845v.75h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.155 20.15c0-2.945 2.584-5.345 5.345-5.345h.75v1.5h-.75c-1.964 0-3.845 1.76-3.845 3.845v.75h-1.5zM6.846 3.1v15.439h1.5V3.099z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.346 3.85C8.346 6.795 5.76 9.195 3 9.195h-.75v-1.5H3c1.964 0 3.846-1.76 3.846-3.845V3.1h1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.846 3.85c0 2.945 2.584 5.345 5.345 5.345h.75v-1.5h-.75c-1.964 0-3.845-1.76-3.845-3.845V3.1h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwapOutlinesharp;
