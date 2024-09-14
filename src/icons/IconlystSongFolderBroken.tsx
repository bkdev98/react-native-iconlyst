import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongFolderBroken = ({
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
      d="M15.89 20.987c3.357 0 5.334-1.978 5.334-5.332l.026-4.656c0-3.423-1.242-5.136-4.605-5.136h-2.653a2.15 2.15 0 0 1-1.712-.855l-.856-1.138a2.14 2.14 0 0 0-1.711-.857H7.838C4.482 3.013 3.25 4.99 3.25 8.34v7.314c0 3.354 1.981 5.332 5.345 5.332h3.648"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.408 14.631a1.843 1.843 0 1 0 2.051-1.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.068 15.072.662-5.496s.326 1.295 1.575 1.71"
    />
  </Svg>
);
export default IconlystSongFolderBroken;
