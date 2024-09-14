import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserMusicLight = ({
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
      d="M20.74 12.329a8.673 8.673 0 1 1-7.59-8.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.188 7.414a1.793 1.793 0 1 1-3.586 0 1.793 1.793 0 0 1 3.586 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.187 7.415V3s.466 1.212 1.719 1.467M7.805 19.881c.17-1.32 1.342-2.783 4.256-2.783 2.945 0 4.11 1.472 4.272 2.808"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.538 12.293a2.469 2.469 0 1 1-4.937 0 2.469 2.469 0 0 1 4.937 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserMusicLight;
