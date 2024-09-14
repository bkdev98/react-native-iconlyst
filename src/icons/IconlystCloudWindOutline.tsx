import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindOutline = ({
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
      d="M8.152 5.68c.897-1.186 2.333-2.135 4.403-2.135s3.505.949 4.402 2.135a6.35 6.35 0 0 1 1.188 2.807c1.04.13 1.993.557 2.73 1.263.902.864 1.43 2.101 1.43 3.584a4.89 4.89 0 0 1-2.878 4.458.75.75 0 1 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.388-1.946-.968-2.502-.586-.562-1.42-.889-2.386-.89a.75.75 0 0 1-.75-.75c0-.658-.27-1.723-.94-2.608-.647-.855-1.66-1.54-3.206-1.54s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.97.01-1.804.337-2.391.898-.58.554-.968 1.381-.968 2.493A3.39 3.39 0 0 0 6.3 16.425a.75.75 0 1 1-.618 1.367 4.89 4.89 0 0 1-2.877-4.458c0-1.484.529-2.716 1.432-3.578.737-.704 1.69-1.13 2.727-1.265A6.35 6.35 0 0 1 8.152 5.68"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.738 15.895a.75.75 0 0 1 .75-.75h4.796a.75.75 0 0 1 0 1.5h-4.796a.75.75 0 0 1-.75-.75m-2.74 3.81a.75.75 0 0 1 .75-.75h4.11a.75.75 0 0 1 0 1.5h-4.11a.75.75 0 0 1-.75-.75m7.537 0a.75.75 0 0 1 .75-.75h2.055a.75.75 0 0 1 0 1.5h-2.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudWindOutline;
