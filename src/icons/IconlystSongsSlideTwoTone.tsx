import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsSlideTwoTone = ({
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
      d="M15.445 20h-5.94a3.1 3.1 0 0 1-3.1-3.1V7.099c0-1.713 1.388-3.101 3.1-3.101h5.94c1.713 0 3.101 1.388 3.101 3.1V16.9c0 1.712-1.388 3.1-3.1 3.1"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.651 13.728a1.726 1.726 0 1 1-3.452 0 1.726 1.726 0 0 1 3.452 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 7.465v9.068M21.5 7.465v9.068M13.65 13.727V8.545s.45 1.167 1.656 1.413"
    />
  </Svg>
);
export default IconlystSongsSlideTwoTone;
