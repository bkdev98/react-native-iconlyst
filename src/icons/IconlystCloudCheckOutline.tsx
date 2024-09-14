import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudCheckOutline = ({
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
      d="M7.847 5.841c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.091c0-1.113-.387-1.945-.968-2.501-.586-.562-1.419-.889-2.385-.889a.75.75 0 0 1-.75-.75c0-.659-.27-1.723-.94-2.609-.647-.855-1.66-1.539-3.207-1.539s-2.56.684-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896-.581.554-.969 1.382-.969 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 13.495c0-1.484.529-2.717 1.433-3.579.736-.703 1.689-1.128 2.726-1.264a6.35 6.35 0 0 1 1.188-2.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.942 14.298a.75.75 0 0 1 0 1.06l-4.715 4.718a.75.75 0 0 1-1.061 0l-2.289-2.292a.75.75 0 1 1 1.062-1.06l1.758 1.76 4.184-4.186a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudCheckOutline;
