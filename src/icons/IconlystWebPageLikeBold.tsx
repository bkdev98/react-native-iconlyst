import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageLikeBold = ({
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
      d="M3.924 4.068c.933-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.93.567 3.862 1.568.928.997 1.42 2.382 1.42 3.958v.716h-19v-.716c0-1.576.495-2.962 1.424-3.958M5.54 6.55a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5H6.29a.75.75 0 0 1-.75-.75m2.485 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.515 13.693a1.23 1.23 0 0 0-1.093.186.71.71 0 0 1-.844-.001 1.22 1.22 0 0 0-1.096-.185c-.757.244-.939 1.092-.723 1.766.32.996 1.521 1.933 2.241 2.394.724-.465 1.93-1.407 2.24-2.39.217-.677.036-1.525-.725-1.77"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 10.242v5.73c0 1.577.493 2.963 1.42 3.96.932 1 2.266 1.567 3.863 1.567h8.434c1.598 0 2.931-.567 3.863-1.568.928-.997 1.42-2.382 1.42-3.958v-5.73zm13.085 5.648c-.608 1.94-3.138 3.345-3.245 3.405a.7.7 0 0 1-.677 0c-.106-.058-2.617-1.445-3.248-3.405-.49-1.532.229-3.088 1.637-3.54a2.62 2.62 0 0 1 1.95.14 2.65 2.65 0 0 1 1.94-.142c1.415.455 2.134 2.01 1.643 3.542"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageLikeBold;
