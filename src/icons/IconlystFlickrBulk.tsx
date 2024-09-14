import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickrBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.407 14.45A2.456 2.456 0 0 1 12.953 12a2.42 2.42 0 0 1 .714-1.732 2.43 2.43 0 0 1 1.739-.718A2.454 2.454 0 0 1 17.859 12c0 1.35-1.1 2.45-2.452 2.45m-.678-3.123a.94.94 0 0 1 .672-.278h.005c.525 0 .953.426.953.95a.954.954 0 1 1-1.63-.672M9.083 14.45A2.456 2.456 0 0 1 6.629 12a2.43 2.43 0 0 1 .714-1.732 2.43 2.43 0 0 1 1.734-.718h.005A2.454 2.454 0 0 1 11.534 12c0 1.35-1.1 2.45-2.451 2.45m-.678-3.123a.95.95 0 0 1 .672-.278h.005a.951.951 0 1 1 .001 1.9.954.954 0 0 1-.678-1.622"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickrBulk;
