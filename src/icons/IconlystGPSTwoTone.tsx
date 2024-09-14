import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGPSTwoTone = ({
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
      d="M18.433 4.172H6.567c-2.5 0-4.067 1.77-4.067 4.274v7.103c0 2.504 1.56 4.274 4.067 4.274h11.865c2.508 0 4.068-1.77 4.068-4.274V8.446c0-2.504-1.56-4.274-4.067-4.274"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.28 14.74h1.161a1.37 1.37 0 0 0 0-2.739h-.195a1.37 1.37 0 0 1 0-2.74h1.163M11.93 12.548h1.35a1.642 1.642 0 1 0 0-3.286h-1.35v5.478M9.054 9.545a2.7 2.7 0 0 0-1.076-.28C6.545 9.193 5.359 10.428 5.3 11.86c-.066 1.577.98 2.878 2.54 2.878.913 0 1.564-.325 1.564-1.239V12H7.839"
    />
  </Svg>
);
export default IconlystGPSTwoTone;
