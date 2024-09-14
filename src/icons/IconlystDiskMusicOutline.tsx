import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicOutline = ({
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
      d="M4.883 3a.75.75 0 0 1 .75-.75h4.837a3.293 3.293 0 0 1 3.293 3.293v12.914a3.293 3.293 0 0 1-3.293 3.293H5.633a.75.75 0 0 1 0-1.5h4.837c.99 0 1.793-.803 1.793-1.793V5.543c0-.99-.803-1.793-1.793-1.793H5.633a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.414 12.752a1.41 1.41 0 1 0-.002 2.818 1.41 1.41 0 0 0 .002-2.818m-2.91 1.409a2.91 2.91 0 1 1 5.818 0 2.91 2.91 0 0 1-5.818 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.27 7.406a.75.75 0 0 0-1.448.274v6.482a.75.75 0 0 0 1.5 0v-4.46c.325.211.713.386 1.171.48a.75.75 0 0 0 .299-1.47c-.533-.109-.911-.421-1.17-.738a2.7 2.7 0 0 1-.35-.566M14.977 4.566a.75.75 0 0 1 .919-.53 8.25 8.25 0 0 1 6.101 7.963 8.25 8.25 0 0 1-6.101 7.963.75.75 0 0 1-.389-1.449A6.75 6.75 0 0 0 20.497 12a6.75 6.75 0 0 0-4.99-6.515.75.75 0 0 1-.53-.918"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.056 9.572a.75.75 0 0 1 1.028-.262c.889.528 1.408 1.576 1.408 2.688 0 1.109-.517 2.17-1.408 2.698a.75.75 0 1 1-.766-1.29c.355-.21.674-.726.674-1.408 0-.678-.317-1.186-.674-1.398a.75.75 0 0 1-.262-1.028"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicOutline;
