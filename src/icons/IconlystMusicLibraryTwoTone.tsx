import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicLibraryTwoTone = ({
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
      d="M20.52 17.893V11.94a3.11 3.11 0 0 0-3.108-3.108H7.588A3.11 3.11 0 0 0 4.48 11.94v5.953a3.11 3.11 0 0 0 3.108 3.108h9.824a3.11 3.11 0 0 0 3.108-3.108"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.962 17.54a1.124 1.124 0 1 1-2.247 0 1.124 1.124 0 0 1 2.247 0M15.326 16.739a1.124 1.124 0 1 1-2.248 0 1.124 1.124 0 0 1 2.248 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.325 16.74v-5.037a8.66 8.66 0 0 1-4.362.8v5.038M7.043 5.918h10.915M9.422 3h6.155"
    />
  </Svg>
);
export default IconlystMusicLibraryTwoTone;
