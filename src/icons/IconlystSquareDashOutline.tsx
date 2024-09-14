import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareDashOutline = ({
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
      d="M9.519 21a.75.75 0 0 1 .75-.75h3.962a.75.75 0 0 1 0 1.5H10.27a.75.75 0 0 1-.75-.75M3.174 16.172a.75.75 0 0 1 .846.64c.269 1.92 1.503 3.204 3.391 3.424a.75.75 0 0 1-.174 1.49C4.62 21.42 2.89 19.563 2.535 17.02a.75.75 0 0 1 .639-.847M21.283 16.172a.75.75 0 0 1 .64.847c-.356 2.542-2.074 4.401-4.693 4.707a.75.75 0 0 1-.174-1.49c1.885-.22 3.112-1.501 3.38-3.425a.75.75 0 0 1 .847-.639M21.25 9.269a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0V10.02a.75.75 0 0 1 .75-.75M9.52 3a.75.75 0 0 1 .75-.75h3.962a.75.75 0 0 1 0 1.5H10.27A.75.75 0 0 1 9.52 3M3.25 9.269a.75.75 0 0 1 .75.75v3.962a.75.75 0 0 1-1.5 0V10.02a.75.75 0 0 1 .75-.75M8.069 2.933a.75.75 0 0 1-.658.832c-1.885.22-3.122 1.51-3.39 3.434a.75.75 0 0 1-1.486-.207C2.89 4.449 4.618 2.58 7.237 2.275a.75.75 0 0 1 .832.658M16.398 2.933a.75.75 0 0 1 .832-.658c2.621.306 4.337 2.177 4.692 4.717a.75.75 0 0 1-1.485.207c-.27-1.926-1.498-3.214-3.381-3.434a.75.75 0 0 1-.658-.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareDashOutline;
