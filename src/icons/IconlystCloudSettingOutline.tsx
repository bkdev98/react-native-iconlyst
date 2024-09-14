import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSettingOutline = ({
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
      d="M7.847 5.662c.898-1.186 2.334-2.135 4.403-2.135 2.07 0 3.505.949 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.387-1.946-.968-2.502-.586-.562-1.419-.889-2.386-.89a.75.75 0 0 1-.749-.75c0-.659-.27-1.723-.94-2.608-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.743.75c-.97.009-1.805.337-2.392.897-.58.555-.968 1.382-.968 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 13.316c0-1.484.529-2.716 1.432-3.579.737-.703 1.69-1.128 2.727-1.264A6.35 6.35 0 0 1 7.847 5.66"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 15.086a1.404 1.404 0 1 0 0 2.809 1.404 1.404 0 0 0 0-2.81M9.346 16.49a2.904 2.904 0 1 1 5.808 0 2.904 2.904 0 0 1-5.808 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.802 14.5a.75.75 0 0 1 1.024-.275l.933.539a.75.75 0 1 1-.75 1.299l-.932-.538a.75.75 0 0 1-.275-1.024m4.663 2.692a.75.75 0 0 1 1.025-.274l.933.539a.75.75 0 0 1-.75 1.299l-.933-.54a.75.75 0 0 1-.275-1.024M15.698 14.5a.75.75 0 0 1-.276 1.025l-.933.538a.75.75 0 1 1-.749-1.3l.933-.538a.75.75 0 0 1 1.024.276m-4.664 2.692a.75.75 0 0 1-.275 1.024l-.933.54a.75.75 0 1 1-.75-1.3l.933-.538a.75.75 0 0 1 1.025.274M12.25 12.512a.75.75 0 0 1 .75.75v1.076a.75.75 0 0 1-1.5 0v-1.076a.75.75 0 0 1 .75-.75m0 5.384a.75.75 0 0 1 .75.75v1.077a.75.75 0 0 1-1.5 0v-1.077a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSettingOutline;
