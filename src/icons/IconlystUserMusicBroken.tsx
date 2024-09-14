import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserMusicBroken = ({
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
      d="M20.99 12.327a8.673 8.673 0 0 1-16.842 2.916M3.646 12.329a8.673 8.673 0 0 1 9.753-8.606"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.438 7.415a1.793 1.793 0 1 1-3.586 0 1.793 1.793 0 0 1 3.586 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.437 7.415V3s.466 1.212 1.719 1.467M8.054 19.881c.17-1.32 1.343-2.783 4.257-2.783 2.945 0 4.11 1.472 4.272 2.808M9.852 12.295a2.468 2.468 0 1 0 2.468-2.469"
    />
  </Svg>
);
export default IconlystUserMusicBroken;
