import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSearchOutline = ({
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
      d="M7.847 5.603c.898-1.186 2.334-2.134 4.403-2.134 2.07 0 3.505.948 4.403 2.134a6.35 6.35 0 0 1 1.187 2.808c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.457.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.113-.387-1.946-.968-2.502-.586-.561-1.419-.888-2.385-.888a.75.75 0 0 1-.75-.75c0-.66-.27-1.724-.94-2.61-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.61a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896-.581.554-.969 1.382-.969 2.494 0 1.374.817 2.558 1.995 3.09a.75.75 0 0 1-.617 1.367A4.89 4.89 0 0 1 2.5 13.258c0-1.484.529-2.717 1.433-3.58.736-.702 1.689-1.127 2.726-1.263a6.35 6.35 0 0 1 1.188-2.812"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.248 14.453a1.97 1.97 0 1 0-.001 3.94 1.97 1.97 0 0 0 0-3.94m-3.47 1.97a3.47 3.47 0 1 1 6.94 0 3.47 3.47 0 0 1-6.94 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.567 17.884a.75.75 0 0 1 1.06 0l1.37 1.365a.75.75 0 0 1-1.06 1.062l-1.37-1.366a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudSearchOutline;
