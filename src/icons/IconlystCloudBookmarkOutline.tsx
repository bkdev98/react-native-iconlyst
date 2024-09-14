import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudBookmarkOutline = ({
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
      d="M7.847 5.115C8.745 3.93 10.181 2.98 12.25 2.98c2.07 0 3.505.95 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.263.902.864 1.43 2.101 1.43 3.584a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.387-1.946-.968-2.502-.586-.561-1.419-.888-2.385-.889a.75.75 0 0 1-.75-.75c0-.658-.27-1.723-.94-2.609-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.61a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896C4.387 10.83 4 11.658 4 12.769c0 1.375.817 2.559 1.995 3.091a.75.75 0 0 1-.617 1.367A4.89 4.89 0 0 1 2.5 12.77c0-1.484.529-2.716 1.433-3.578.736-.704 1.689-1.129 2.726-1.264a6.35 6.35 0 0 1 1.188-2.812"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.556 13.149c.468-.335 1.05-.438 1.592-.438h2.239c.56 0 1.153.11 1.621.47.503.385.744.964.744 1.637l.002 5.117c0 .19-.05.373-.14.534l-.653-.37.653.369a1.084 1.084 0 0 1-1.477.412l-1.86-1.05-1.882 1.054a1.084 1.084 0 0 1-1.614-.947v-5.184c0-.677.267-1.24.775-1.604m.874 1.219c-.07.05-.149.132-.149.385v4.475l1.63-.914a.75.75 0 0 1 .736.002l1.607.907-.002-4.405c0-.297-.09-.396-.156-.447-.101-.077-.316-.16-.71-.16h-2.238c-.383 0-.608.078-.718.157"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudBookmarkOutline;
