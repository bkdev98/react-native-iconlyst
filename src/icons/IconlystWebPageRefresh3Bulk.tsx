import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageRefresh3Bulk = ({
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
      <Path d="M7.826 2.5c-1.593 0-2.926.568-3.859 1.568-.929.996-1.424 2.382-1.424 3.958v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM2.543 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.826c-1.597 0-2.93-.567-3.863-1.568-.928-.997-1.42-2.382-1.42-3.958" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.333 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.487 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 1 0 0-1.5zM11.784 13.515q.127-.015.259-.015c1.223 0 2.215.992 2.215 2.215a.75.75 0 1 0 1.5 0 3.715 3.715 0 0 0-6.173-2.786.75.75 0 0 0 .157 1.231l1.46.741a.75.75 0 0 0 .678-1.337zm-2.706 1.45a.75.75 0 0 1 .75.75 2.215 2.215 0 0 0 2.474 2.2l-.096-.049a.75.75 0 0 1 .679-1.337l1.46.74a.75.75 0 0 1 .156 1.232 3.715 3.715 0 0 1-6.173-2.786.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageRefresh3Bulk;
