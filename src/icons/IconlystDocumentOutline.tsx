import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.909 2c3.144 0 5.256 2.153 5.256 5.357v9.196c0 3.232-2.047 5.334-5.215 5.354l-7.693.003C5.113 21.91 3 19.757 3 16.553V7.357c0-3.233 2.047-5.334 5.215-5.353L15.908 2m0 1.5-7.69.004C5.893 3.518 4.5 4.958 4.5 7.357v9.196c0 2.415 1.406 3.857 3.757 3.857l7.689-.003c2.328-.014 3.72-1.456 3.72-3.854V7.357c0-2.415-1.404-3.857-3.756-3.857m-.193 11.974a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1 0-1.5zm0-4.187a.75.75 0 0 1 0 1.5h-7.22a.75.75 0 0 1 0-1.5zM11.25 7.11a.75.75 0 0 1 0 1.5H8.496a.75.75 0 0 1 0-1.5z"
    />
  </Svg>
);
export default IconlystDocumentOutline;
