import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReelOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.952 3.883a8.118 8.118 0 1 0 0 16.236 8.118 8.118 0 0 0 0-16.236M2.333 12c0-5.31 4.306-9.617 9.618-9.617 5.31 0 9.617 4.306 9.617 9.617s-4.306 9.617-9.617 9.617S2.333 17.312 2.333 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.952 15.477a.708.708 0 1 0 0 1.415.708.708 0 0 0 0-1.415m-2.208.707a2.208 2.208 0 1 1 4.416 0 2.208 2.208 0 0 1-4.416 0M7.77 11.293a.707.707 0 1 0 0 1.415.707.707 0 0 0 0-1.415m-2.207.708A2.207 2.207 0 1 1 9.977 12a2.207 2.207 0 0 1-4.414 0M11.952 7.11a.707.707 0 1 0 0 1.414.707.707 0 0 0 0-1.415m-2.208.707a2.207 2.207 0 1 1 4.415 0 2.207 2.207 0 0 1-4.415 0M16.133 11.293a.707.707 0 1 0 0 1.414.707.707 0 0 0 0-1.414m-2.207.708A2.207 2.207 0 1 1 18.34 12a2.207 2.207 0 0 1-4.414 0M11.201 20.867a.75.75 0 0 1 .75-.75h9.133a.75.75 0 0 1 0 1.5H11.95a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieReelOutline;
