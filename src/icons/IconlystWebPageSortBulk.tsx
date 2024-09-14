import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSortBulk = ({
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
      d="M7.108 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 1 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zM10.213 12.563a.75.75 0 0 1 1.041 0l1.398 1.349a.75.75 0 1 1-1.041 1.08l-.128-.124v3.29a.75.75 0 0 1-1.5 0v-3.29l-.128.123a.75.75 0 1 1-1.04-1.08zm5.15.19a.75.75 0 0 1 .75.75v3.291l.128-.122a.75.75 0 0 1 1.041 1.08L15.883 19.1a.75.75 0 0 1-1.041 0l-1.398-1.349a.75.75 0 1 1 1.042-1.08l.127.124v-3.292a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageSortBulk;
