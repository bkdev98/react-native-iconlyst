import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage4Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.602 2.5c-1.594 0-2.927.568-3.86 1.568-.929.996-1.423 2.382-1.423 3.958v.716h18.999v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.264-1.568-3.862-1.568zM3.319 15.973v-5.73h18.999v5.73c0 1.576-.492 2.961-1.42 3.958-.931 1-2.265 1.568-3.863 1.568H8.602c-1.598 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.358 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.487 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75M14.512 12.916a.75.75 0 0 0 0 1.5h3.53a.75.75 0 0 0 0-1.5zm0 3.306a.75.75 0 0 0 0 1.5h3.53a.75.75 0 0 0 0-1.5zm-7.666-1.65a1.9 1.9 0 0 1 1.9-1.9h1.491a1.9 1.9 0 0 1 1.901 1.9v1.49a1.9 1.9 0 0 1-1.9 1.901H8.746a1.9 1.9 0 0 1-1.901-1.901zm1.5 0a.4.4 0 0 1 .4-.4h1.491a.4.4 0 0 1 .401.4v1.49a.4.4 0 0 1-.4.401H8.746a.4.4 0 0 1-.401-.401z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPage4Bulk;
