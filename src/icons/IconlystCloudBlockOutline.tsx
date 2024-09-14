import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBlockOutline = ({
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
      d="M7.847 5.384c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.807c1.04.131 1.993.558 2.73 1.263.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.091c0-1.113-.387-1.946-.968-2.502-.586-.561-1.419-.888-2.386-.89a.75.75 0 0 1-.749-.75c0-.658-.27-1.722-.94-2.608-.647-.855-1.66-1.539-3.207-1.539s-2.56.684-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.743.75c-.97.009-1.805.337-2.392.897C4.388 11.1 4 11.927 4 13.04c0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 13.039c0-1.484.529-2.717 1.432-3.579.737-.703 1.69-1.129 2.727-1.265a6.35 6.35 0 0 1 1.188-2.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.383 16.882a3.867 3.867 0 1 1 7.733 0 3.867 3.867 0 0 1-7.733 0m3.867-2.366a2.367 2.367 0 1 0-.001 4.733 2.367 2.367 0 0 0 .001-4.733"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15 14.165a.75.75 0 0 1 .002 1.06l-4.403 4.412a.75.75 0 0 1-1.062-1.06l4.403-4.412a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudBlockOutline;
