import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudHideOutline = ({
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
      d="M7.847 6.678c.898-1.186 2.334-2.135 4.403-2.135 2.07 0 3.505.949 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.091c0-1.113-.387-1.946-.968-2.502-.586-.56-1.419-.888-2.385-.888a.75.75 0 0 1-.75-.75c0-.659-.27-1.724-.94-2.61-.647-.854-1.66-1.539-3.207-1.539s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.609a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896C4.387 12.392 4 13.22 4 14.332c0 1.374.817 2.558 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 14.332c0-1.484.529-2.717 1.433-3.579.736-.703 1.689-1.128 2.726-1.264a6.35 6.35 0 0 1 1.188-2.811"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.445 18.707a.75.75 0 0 1 .75-.75h4.11a.75.75 0 0 1 0 1.5h-4.11a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudHideOutline;
