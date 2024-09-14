import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudInfoOutline = ({
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
      d="M7.847 6.31c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.808c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.457.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.113-.387-1.946-.968-2.502-.586-.561-1.419-.888-2.385-.888a.75.75 0 0 1-.75-.75c0-.66-.27-1.724-.94-2.61-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.61a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896-.581.554-.969 1.382-.969 2.494 0 1.374.817 2.558 1.995 3.09a.75.75 0 0 1-.617 1.367A4.89 4.89 0 0 1 2.5 13.965c0-1.484.529-2.717 1.433-3.58.736-.702 1.689-1.127 2.726-1.263A6.35 6.35 0 0 1 7.847 6.31"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.254 14.219a.75.75 0 0 1 .75.75v4.107a.75.75 0 0 1-1.5 0V14.97a.75.75 0 0 1 .75-.75M12.254 11.246a.75.75 0 0 1 .75.75v.061a.75.75 0 1 1-1.5 0v-.06a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudInfoOutline;
