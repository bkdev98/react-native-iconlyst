import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongFolderBulk = ({
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
      d="M16.965 5.364h-2.652A1.66 1.66 0 0 1 13 4.709l-.855-1.138a2.66 2.66 0 0 0-2.112-1.057H8.158C4.734 2.514 3.07 4.42 3.07 8.34v7.314c0 3.652 2.185 5.832 5.845 5.832h7.296c3.652 0 5.833-2.18 5.833-5.83L22.07 11c0-3.845-1.622-5.636-5.105-5.636"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.337 11.523a.75.75 0 0 1-.948.476 3 3 0 0 1-.824-.426l-.43 3.577v.011a2.58 2.58 0 0 1-.975 1.731 2.58 2.58 0 0 1-1.912.535 2.58 2.58 0 0 1-1.73-.974 2.58 2.58 0 0 1-.535-1.912 2.6 2.6 0 0 1 2.886-2.264c.39.046.743.184 1.055.379l.382-3.17a.75.75 0 0 1 1.472-.092c.008.03.254.905 1.083 1.18a.75.75 0 0 1 .476.949m-3.693 3.454v.007a1.093 1.093 0 1 1 0-.007"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongFolderBulk;
