import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpSquareLoadOutline = ({
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
      d="M8.094 13.934a.75.75 0 0 0 1.06-.002L12 11.073l2.846 2.858a.75.75 0 1 0 1.063-1.058l-3.377-3.392a.75.75 0 0 0-1.063 0l-3.377 3.392a.75.75 0 0 0 .002 1.06M9.269 21a.75.75 0 0 1 .75-.75h3.963a.75.75 0 0 1 0 1.5h-3.963a.75.75 0 0 1-.75-.75M2.924 16.172a.75.75 0 0 1 .846.639c.269 1.921 1.503 3.204 3.391 3.425a.75.75 0 0 1-.174 1.49c-2.617-.306-4.347-2.163-4.702-4.708a.75.75 0 0 1 .639-.846M21.033 16.172a.75.75 0 0 1 .64.846c-.356 2.543-2.074 4.401-4.693 4.708a.75.75 0 0 1-.174-1.49c1.885-.22 3.112-1.502 3.38-3.425a.75.75 0 0 1 .847-.64M21 9.268a.75.75 0 0 1 .75.75v3.963a.75.75 0 0 1-1.5 0v-3.963a.75.75 0 0 1 .75-.75M9.27 3a.75.75 0 0 1 .75-.75h3.962a.75.75 0 0 1 0 1.5H10.02A.75.75 0 0 1 9.27 3M3 9.268a.75.75 0 0 1 .75.75v3.963a.75.75 0 0 1-1.5 0v-3.963a.75.75 0 0 1 .75-.75M7.819 2.932a.75.75 0 0 1-.658.832c-1.885.22-3.122 1.511-3.39 3.435a.75.75 0 1 1-1.486-.208c.355-2.542 2.083-4.41 4.702-4.717a.75.75 0 0 1 .832.658M16.148 2.932a.75.75 0 0 1 .832-.658c2.621.307 4.337 2.177 4.692 4.717a.75.75 0 0 1-1.485.208c-.27-1.926-1.498-3.215-3.381-3.435a.75.75 0 0 1-.658-.832"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpSquareLoadOutline;
