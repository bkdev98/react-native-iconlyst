import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEye2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.531 7.47c1.79-1.42 4.202-2.355 6.719-2.355s4.93.934 6.72 2.356C20.748 8.884 22 10.855 22 12.967c0 2.11-1.24 4.082-3.016 5.496a10.96 10.96 0 0 1-6.734 2.356c-2.535 0-4.947-.933-6.734-2.356C3.74 17.05 2.5 15.077 2.5 12.967c0-2.112 1.252-4.083 3.031-5.496m.933 1.175C4.912 9.878 4 11.457 4 12.967c0 1.512.905 3.092 2.45 4.323a9.46 9.46 0 0 0 5.8 2.03 9.46 9.46 0 0 0 5.8-2.03c1.546-1.231 2.45-2.81 2.45-4.323 0-1.51-.912-3.09-2.464-4.322-1.541-1.224-3.629-2.03-5.786-2.03s-4.244.806-5.786 2.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.426 12.966a3.827 3.827 0 1 1 7.654 0 3.827 3.827 0 0 1-7.654 0m3.826-2.327a2.327 2.327 0 1 0 .002 4.654 2.327 2.327 0 0 0-.002-4.654"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEye2Outline;
