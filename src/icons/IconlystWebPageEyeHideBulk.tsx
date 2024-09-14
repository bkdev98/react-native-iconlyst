import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEyeHideBulk = ({
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
      d="M6.358 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 1 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.487 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75M9.393 12.753a.75.75 0 0 1 .985.392c.583 1.354 1.529 2.006 2.416 2.022h.068c.53-.01 1.081-.247 1.564-.726a.8.8 0 0 1 .142-.151c.267-.302.509-.682.708-1.145a.75.75 0 0 1 1.378.593 6 6 0 0 1-.605 1.088l.506.506a.75.75 0 1 1-1.06 1.06l-.482-.48c-.433.326-.916.559-1.435.674v.728a.75.75 0 1 1-1.5 0v-.728a3.7 3.7 0 0 1-1.447-.682l-.49.489a.75.75 0 0 1-1.06-1.06l.516-.517a6 6 0 0 1-.596-1.078.75.75 0 0 1 .392-.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageEyeHideBulk;
