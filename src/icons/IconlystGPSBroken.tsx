import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGPSBroken = ({
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
      d="M18.183 4.174H6.317c-2.5 0-4.067 1.77-4.067 4.274v7.103c0 2.504 1.56 4.274 4.067 4.274h11.865c2.508 0 4.068-1.77 4.068-4.274V8.448c0-2.504-1.56-4.274-4.067-4.274"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.03 14.739h1.162a1.37 1.37 0 0 0 0-2.739h-.196a1.37 1.37 0 0 1 0-2.74h1.163M11.68 12.547h1.35a1.642 1.642 0 1 0 0-3.286h-1.35v5.478M8.805 9.544a2.7 2.7 0 0 0-1.077-.28c-1.432-.072-2.618 1.163-2.678 2.595-.066 1.577.98 2.878 2.54 2.878.913 0 1.564-.325 1.564-1.239v-1.5H7.59"
    />
  </Svg>
);
export default IconlystGPSBroken;
