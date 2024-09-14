import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainOutline = ({
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
      d="M8.212 5.162c.897-1.186 2.333-2.135 4.402-2.135s3.506.949 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.994.557 2.73 1.262.903.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.877 4.458.75.75 0 0 1-.618-1.367 3.39 3.39 0 0 0 1.995-3.09c0-1.114-.387-1.946-.968-2.502-.586-.562-1.419-.889-2.385-.89a.75.75 0 0 1-.75-.75c0-.659-.27-1.723-.94-2.608-.647-.855-1.66-1.54-3.207-1.54s-2.56.685-3.206 1.54c-.67.885-.94 1.95-.94 2.608a.75.75 0 0 1-.744.75c-.97.009-1.805.337-2.392.897-.58.555-.968 1.382-.968 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 0 1-.617 1.368 4.89 4.89 0 0 1-2.878-4.458c0-1.484.53-2.716 1.433-3.579.737-.703 1.69-1.128 2.726-1.264a6.35 6.35 0 0 1 1.189-2.811"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.56 14.528a.75.75 0 0 1 .504.933l-.483 1.621a.75.75 0 0 1-1.438-.428l.484-1.622a.75.75 0 0 1 .933-.504m-4.337-.001a.75.75 0 0 1 .507.931l-.392 1.334h1.001a.75.75 0 0 1 .717.973l-.682 2.193a.75.75 0 0 1-1.433-.445l.38-1.221h-.986a.75.75 0 0 1-.72-.962l.676-2.295a.75.75 0 0 1 .931-.508M8.177 18.28c.401.105.641.515.537.916l-.317 1.215a.75.75 0 0 1-1.452-.38l.317-1.214a.75.75 0 0 1 .915-.537m8.13 0c.4.105.641.515.536.916l-.317 1.215a.75.75 0 1 1-1.451-.38l.317-1.214a.75.75 0 0 1 .915-.537"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRainOutline;
