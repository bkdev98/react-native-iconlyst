import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsSlideBroken = ({
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
      d="M15.196 20.002c1.712 0 3.1-1.389 3.1-3.101V7.1c0-1.713-1.388-3.101-3.1-3.101h-5.94a3.1 3.1 0 0 0-3.101 3.1v9.802c0 1.712 1.388 3.1 3.1 3.1h2.586"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.95 13.728a1.726 1.726 0 1 0 1.725-1.726M3.25 7.465v9.068M21.25 7.465v9.068"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.4 13.727V8.545s.45 1.167 1.656 1.413"
    />
  </Svg>
);
export default IconlystSongsSlideBroken;
