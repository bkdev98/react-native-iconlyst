import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLikeBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M7.783 2.5c-1.593 0-2.926.568-3.859 1.568C2.995 5.064 2.5 6.45 2.5 8.026v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.931-1-2.265-1.568-3.862-1.568zM2.5 15.973v-5.73h19v5.73c0 1.576-.492 2.961-1.42 3.958-.932 1-2.265 1.568-3.863 1.568H7.783c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.382-1.42-3.958" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.54 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5H6.29a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75M12.34 19.295c.107-.06 2.637-1.465 3.245-3.405.49-1.532-.228-3.087-1.643-3.542a2.65 2.65 0 0 0-1.94.143 2.62 2.62 0 0 0-1.95-.141c-1.408.452-2.127 2.008-1.638 3.54h.001c.63 1.96 3.142 3.347 3.248 3.406a.7.7 0 0 0 .677-.001m1.175-5.603a1.23 1.23 0 0 0-1.093.187.71.71 0 0 1-.844-.001 1.22 1.22 0 0 0-1.096-.185c-.757.244-.939 1.092-.723 1.766.32.996 1.521 1.933 2.241 2.394.724-.465 1.93-1.407 2.24-2.39.217-.677.036-1.525-.725-1.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageLikeBulk;
