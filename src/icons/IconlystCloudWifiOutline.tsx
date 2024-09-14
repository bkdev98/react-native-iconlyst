import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWifiOutline = ({
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
      d="M7.847 5.673c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134A6.35 6.35 0 0 1 17.84 8.48c1.04.131 1.993.558 2.73 1.263.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.091c0-1.113-.387-1.945-.968-2.502-.586-.561-1.419-.888-2.386-.889a.75.75 0 0 1-.749-.75c0-.659-.27-1.723-.94-2.609-.647-.855-1.66-1.539-3.207-1.539s-2.56.684-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.743.75c-.97.009-1.805.337-2.392.897-.58.554-.968 1.382-.968 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 13.328c0-1.484.529-2.716 1.432-3.579.737-.703 1.69-1.129 2.727-1.264a6.35 6.35 0 0 1 1.188-2.812M12.24 18.914a.75.75 0 0 1 .75.75v.047a.75.75 0 0 1-1.5 0v-.047a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.615 18.115a2.13 2.13 0 0 0-2.738.003.75.75 0 0 1-.973-1.141 3.626 3.626 0 0 1 4.678-.009.75.75 0 1 1-.967 1.147"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.414 15.88a5.085 5.085 0 0 0-6.346 0 .75.75 0 0 1-.937-1.17 6.585 6.585 0 0 1 8.22 0 .75.75 0 1 1-.937 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudWifiOutline;
