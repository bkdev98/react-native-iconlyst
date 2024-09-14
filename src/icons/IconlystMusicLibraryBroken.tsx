import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicLibraryBroken = ({
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
      d="M12.25 21H7.338a3.11 3.11 0 0 1-3.108-3.108V11.94A3.11 3.11 0 0 1 7.338 8.83h9.824a3.11 3.11 0 0 1 3.108 3.108v5.953A3.11 3.11 0 0 1 17.162 21h-1.321"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.712 17.54a1.124 1.124 0 1 1-2.247 0 1.124 1.124 0 0 1 2.247 0M15.076 16.739a1.124 1.124 0 1 1-2.248 0 1.124 1.124 0 0 1 2.248 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.075 16.74v-5.037a8.66 8.66 0 0 1-4.362.8v5.038M12.25 5.919h5.458M6.793 5.918h2.729M9.172 3h6.155"
    />
  </Svg>
);
export default IconlystMusicLibraryBroken;
