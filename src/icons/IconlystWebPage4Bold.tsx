import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage4Bold = ({
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
      d="M4.742 4.068c.933-1 2.266-1.568 3.86-1.568h8.434c1.598 0 2.93.567 3.862 1.568.928.997 1.42 2.382 1.42 3.958v.716h-19v-.716c0-1.576.495-2.962 1.424-3.958M6.358 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.487 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.346 14.573a.4.4 0 0 1 .4-.402h1.491a.4.4 0 0 1 .401.402v1.489a.4.4 0 0 1-.4.401H8.746a.4.4 0 0 1-.401-.401z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.319 10.242v5.73c0 1.577.492 2.963 1.42 3.96.932 1 2.265 1.567 3.863 1.567h8.433c1.598 0 2.932-.567 3.863-1.568.928-.997 1.42-2.382 1.42-3.958v-5.73zm10.443 3.424a.75.75 0 0 1 .75-.75h3.53a.75.75 0 0 1 0 1.5h-3.53a.75.75 0 0 1-.75-.75m0 3.306a.75.75 0 0 1 .75-.75h3.53a.75.75 0 0 1 0 1.5h-3.53a.75.75 0 0 1-.75-.75m-5.015-4.3a1.9 1.9 0 0 0-1.901 1.9v1.49a1.9 1.9 0 0 0 1.9 1.901h1.491a1.9 1.9 0 0 0 1.901-1.901v-1.49a1.9 1.9 0 0 0-1.9-1.9z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPage4Bold;
