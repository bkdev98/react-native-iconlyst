import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainSnowOutline = ({
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
      d="M8.152 5.162c.897-1.186 2.333-2.135 4.403-2.135s3.505.949 4.402 2.135a6.35 6.35 0 0 1 1.188 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.388-1.946-.968-2.502-.586-.562-1.42-.889-2.386-.89a.75.75 0 0 1-.75-.75c0-.659-.27-1.723-.94-2.608-.647-.855-1.66-1.54-3.206-1.54s-2.56.685-3.207 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.97.009-1.804.337-2.391.897-.58.555-.968 1.382-.968 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.618 1.368 4.89 4.89 0 0 1-2.877-4.458c0-1.484.529-2.716 1.432-3.579.737-.703 1.69-1.128 2.727-1.264a6.35 6.35 0 0 1 1.188-2.811M6.144 20.74a.75.75 0 0 1-.372-.994l.498-1.094a.75.75 0 0 1 1.365.622l-.498 1.094a.75.75 0 0 1-.993.372"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.104 17.457a.75.75 0 0 1-.372-.993l.498-1.094a.75.75 0 1 1 1.365.621l-.498 1.094a.75.75 0 0 1-.993.372M18.175 20.776a.75.75 0 0 0 .462 0 .75.75 0 0 0 .524-.719.756.756 0 1 0-.986.72M12.202 20.776a.75.75 0 0 0 .79-.21.756.756 0 1 0-.79.21M10.206 17.5a.75.75 0 0 0 .789-.21.756.756 0 1 0-.79.21"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRainSnowOutline;
