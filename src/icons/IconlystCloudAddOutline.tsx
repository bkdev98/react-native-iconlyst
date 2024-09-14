import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudAddOutline = ({
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
      d="M7.847 5.596C8.745 4.41 10.181 3.46 12.25 3.46c2.07 0 3.505.949 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367A3.39 3.39 0 0 0 20.5 13.25c0-1.113-.387-1.946-.968-2.502-.586-.56-1.419-.888-2.385-.888a.75.75 0 0 1-.75-.75c0-.659-.27-1.724-.94-2.61-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.951-.94 2.61a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896C4.387 11.31 4 12.138 4 13.25c0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368A4.89 4.89 0 0 1 2.5 13.25c0-1.484.529-2.717 1.433-3.579.736-.703 1.689-1.128 2.726-1.264a6.35 6.35 0 0 1 1.188-2.811"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 14.113a.75.75 0 0 1 .75.75v4.926a.75.75 0 1 1-1.5 0v-4.926a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.037 17.324a.75.75 0 0 1 .75-.75h4.926a.75.75 0 0 1 0 1.5H9.787a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudAddOutline;
