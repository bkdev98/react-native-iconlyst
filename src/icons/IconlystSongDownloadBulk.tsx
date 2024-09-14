import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongDownloadBulk = ({
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
      d="M19.33 13.47a4.8 4.8 0 0 1 1.837.369c.172.07.373-.018.418-.199a9.4 9.4 0 0 0 .284-2.282c0-5.24-4.26-9.5-9.5-9.5-5.238 0-9.5 4.26-9.5 9.5 0 5.238 4.262 9.5 9.5 9.5.733 0 1.443-.09 2.127-.25.182-.043.274-.242.206-.416a4.9 4.9 0 0 1-.335-1.76 4.963 4.963 0 0 1 4.963-4.962"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.05 18.692a.747.747 0 0 0-1.06.002l-.887.89v-3.758a.75.75 0 0 0-1.5 0v3.76l-.89-.892a.749.749 0 1 0-1.061 1.059l2.169 2.178a.774.774 0 0 0 1.063 0l2.169-2.178a.75.75 0 0 0-.002-1.061M15.636 8.964a.75.75 0 0 1-.948.476 3.3 3.3 0 0 1-1.054-.58l-.515 4.275q-.002.009-.005.016a2.83 2.83 0 0 1-1.067 1.887 2.83 2.83 0 0 1-2.103.588 2.84 2.84 0 0 1-1.903-1.07 2.855 2.855 0 0 1 2.585-4.594c.48.058.92.243 1.302.515l.457-3.787a.75.75 0 0 1 .697-.659.76.76 0 0 1 .774.565c.014.047.307 1.09 1.304 1.42a.75.75 0 0 1 .476.948m-5.35 2.478q.08 0 .161.01c.36.043.68.224.902.508.223.284.323.639.28.997a1.34 1.34 0 0 1-.508.902 1.33 1.33 0 0 1-.998.279 1.35 1.35 0 0 1-.902-.508 1.355 1.355 0 0 1 1.064-2.188"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongDownloadBulk;
