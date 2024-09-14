import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageCloseRemoveBulk = ({
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
      d="M6.29 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zM14.504 13.318a.75.75 0 0 1 0 1.06l-1.442 1.442 1.44 1.44a.75.75 0 0 1-1.06 1.061l-1.44-1.44-1.443 1.442a.75.75 0 1 1-1.06-1.06l1.442-1.443-1.443-1.444a.75.75 0 0 1 1.06-1.06l1.444 1.443 1.44-1.441a.75.75 0 0 1 1.062 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageCloseRemoveBulk;
