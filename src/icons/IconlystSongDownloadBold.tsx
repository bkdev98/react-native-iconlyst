import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongDownloadBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.877 11.451a1.355 1.355 0 0 0-1.226 2.178c.224.284.544.465.902.508a1.33 1.33 0 0 0 .998-.279c.284-.223.464-.543.507-.902a1.34 1.34 0 0 0-.279-.997 1.34 1.34 0 0 0-.902-.508"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.066 8.964a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275q-.002.008-.005.016a2.83 2.83 0 0 1-1.067 1.887 2.83 2.83 0 0 1-2.103.588 2.84 2.84 0 0 1-1.903-1.07 2.855 2.855 0 0 1 2.585-4.594c.48.058.92.243 1.302.515l.457-3.787a.75.75 0 0 1 .697-.66.76.76 0 0 1 .774.566c.011.039.303 1.089 1.304 1.42a.75.75 0 0 1 .476.948m3.694 4.506a4.8 4.8 0 0 1 1.836.369c.173.07.374-.018.419-.199a9.4 9.4 0 0 0 .284-2.282c0-5.24-4.26-9.5-9.5-9.5-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5.733 0 1.443-.09 2.127-.25.182-.043.274-.242.206-.416a4.9 4.9 0 0 1-.335-1.76 4.963 4.963 0 0 1 4.963-4.962"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.48 18.692a.747.747 0 0 0-1.06.002l-.888.89v-3.758a.75.75 0 0 0-1.5 0v3.76l-.889-.892a.749.749 0 1 0-1.062 1.059l2.17 2.178a.774.774 0 0 0 1.063 0l2.169-2.178a.75.75 0 0 0-.003-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongDownloadBold;
