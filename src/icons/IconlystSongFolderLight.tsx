import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongFolderLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.64 20.987c3.357 0 5.334-1.977 5.334-5.331L21 11c0-3.423-1.242-5.136-4.605-5.136h-2.653a2.15 2.15 0 0 1-1.712-.855l-.856-1.138a2.14 2.14 0 0 0-1.711-.857H7.588C4.232 3.014 3 4.992 3 8.342v7.313c0 3.355 1.981 5.332 5.345 5.332z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.819 15.072a1.844 1.844 0 1 1-3.66-.44 1.844 1.844 0 0 1 3.66.44"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.818 15.072.662-5.496s.326 1.295 1.575 1.71"
    />
  </Svg>
);
export default IconlystSongFolderLight;
