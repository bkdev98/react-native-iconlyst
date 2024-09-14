import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageSearchBold = ({
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
      d="M7.783 2.5c-1.593 0-2.926.568-3.859 1.568C2.995 5.064 2.5 6.45 2.5 8.026v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM6.29 5.8a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.485 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.66 13.5a1.88 1.88 0 1 0 0 3.761 1.88 1.88 0 0 0 0-3.761"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.382-1.42-3.958m5.78-.592a3.38 3.38 0 1 1 6.215 1.841l1.006 1.007a.75.75 0 1 1-1.06 1.06l-1.022-1.021a3.38 3.38 0 0 1-5.14-2.887"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageSearchBold;
