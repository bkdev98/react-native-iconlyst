import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareLoadOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.998 7.379a.75.75 0 0 1 .75.75v5.927l1.74-1.746a.75.75 0 1 1 1.062 1.06l-3.02 3.03a.75.75 0 0 1-1.063 0l-3.018-3.031a.75.75 0 1 1 1.063-1.058l1.736 1.744V8.129a.75.75 0 0 1 .75-.75M9.269 21a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5h-3.963a.75.75 0 0 1-.75-.75M2.924 16.172a.75.75 0 0 1 .846.64c.269 1.92 1.503 3.204 3.391 3.424a.75.75 0 0 1-.174 1.49C4.37 21.42 2.64 19.563 2.285 17.02a.75.75 0 0 1 .639-.847M21.033 16.172a.75.75 0 0 1 .64.847c-.356 2.542-2.074 4.4-4.693 4.707a.75.75 0 0 1-.174-1.49c1.885-.22 3.112-1.501 3.38-3.425a.75.75 0 0 1 .847-.639M21 9.269a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0V10.02a.75.75 0 0 1 .75-.75M9.27 3a.75.75 0 0 1 .75-.75h3.962a.75.75 0 0 1 0 1.5H10.02A.75.75 0 0 1 9.27 3M3 9.269a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0V10.02a.75.75 0 0 1 .75-.75M7.819 2.932a.75.75 0 0 1-.658.832c-1.885.22-3.122 1.512-3.39 3.435a.75.75 0 1 1-1.486-.207C2.64 4.449 4.368 2.58 6.987 2.275a.75.75 0 0 1 .832.657M16.148 2.932a.75.75 0 0 1 .832-.657c2.621.306 4.337 2.177 4.692 4.717a.75.75 0 0 1-1.485.207c-.27-1.926-1.498-3.214-3.381-3.435a.75.75 0 0 1-.658-.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareLoadOutline;
