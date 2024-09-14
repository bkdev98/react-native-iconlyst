import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongLibraryBroken = ({
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
      d="M21.25 8.026C21.25 5.081 19.415 3 16.466 3H8.032C5.084 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.093 21 8.032 21h8.435c2.948 0 4.783-2.081 4.783-5.026V12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.874 14.035a2.032 2.032 0 1 1-4.065 0 2.032 2.032 0 0 1 4.065 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.873 14.035V7.934s.529 1.374 1.95 1.662M8.35 17.811V3"
    />
  </Svg>
);
export default IconlystSongLibraryBroken;
