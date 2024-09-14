import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormat2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.901 4.176h11.866c2.507 0 4.067 1.77 4.067 4.274v7.103c0 2.504-1.56 4.274-4.068 4.274H6.9c-2.507 0-4.067-1.77-4.067-4.274V8.45c0-2.504 1.568-4.274 4.067-4.274"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.474 9.125h-3.115v5.751M18.995 12.48h-2.636M13.357 9.125v5.751M10.256 9.345a2.9 2.9 0 0 0-1.163-.303C7.543 8.964 6.26 10.3 6.196 11.85c-.07 1.704 1.061 3.111 2.746 3.111.987 0 1.691-.352 1.691-1.34V12h-1.69"
    />
  </Svg>
);
export default IconlystGifFormat2Light;
