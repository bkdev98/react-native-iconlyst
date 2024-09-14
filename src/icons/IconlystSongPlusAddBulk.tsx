import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongPlusAddBulk = ({
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
      d="M14.568 19a4.963 4.963 0 0 1 4.962-4.962c.652 0 1.268.136 1.837.369.172.07.373-.018.418-.198a9.4 9.4 0 0 0 .285-2.283c0-5.24-4.262-9.5-9.5-9.5s-9.5 4.26-9.5 9.5c0 5.238 4.262 9.5 9.5 9.5.732 0 1.443-.09 2.127-.251.181-.042.273-.241.206-.415a4.9 4.9 0 0 1-.335-1.76"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.17 21.574a.75.75 0 0 1-.75-.75v-1.38h-1.38a.75.75 0 0 1 0-1.5h1.38l-.001-1.378a.75.75 0 1 1 1.5 0v1.378h1.379a.75.75 0 0 1 0 1.5H19.92v1.38a.75.75 0 0 1-.75.75M13.32 13.703q-.001.004-.004.009a2.83 2.83 0 0 1-1.069 1.894 2.83 2.83 0 0 1-2.102.588 2.83 2.83 0 0 1-1.903-1.07 2.84 2.84 0 0 1-.588-2.103 2.857 2.857 0 0 1 3.173-2.491c.48.058.92.243 1.302.515l.456-3.788a.75.75 0 0 1 1.472-.093c.013.047.307 1.09 1.304 1.42a.75.75 0 0 1 .476.949.753.753 0 0 1-.949.475 3.3 3.3 0 0 1-1.054-.58zm-2.834-1.694q.08.001.162.01a1.35 1.35 0 0 1 1.181 1.505 1.35 1.35 0 0 1-.508.903 1.34 1.34 0 0 1-.997.279 1.34 1.34 0 0 1-.902-.508 1.35 1.35 0 0 1-.279-.998 1.36 1.36 0 0 1 1.343-1.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongPlusAddBulk;
