import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarLocationOutline = ({
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
      d="M18.158 14.6a2.24 2.24 0 0 0-2.24 2.24c0 .789.483 1.655 1.127 2.38.31.35.631.634.89.826q.131.096.223.151.092-.055.223-.151c.26-.192.58-.477.89-.827.645-.724 1.127-1.59 1.127-2.38a2.24 2.24 0 0 0-2.24-2.24m-.138 5.67.008-.003zm.269-.003.008.003q0 0-.008-.003m-3.87-3.428a3.74 3.74 0 1 1 7.48 0c0 1.338-.774 2.553-1.506 3.377-.377.424-.774.78-1.12 1.036a4 4 0 0 1-.502.321c-.122.064-.355.177-.613.177-.257 0-.49-.113-.613-.177a4 4 0 0 1-.502-.32 7.6 7.6 0 0 1-1.12-1.038c-.732-.823-1.505-2.038-1.505-3.376"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.186 15.994a.75.75 0 0 1 .75.75v.058a.75.75 0 0 1-1.5 0v-.058a.75.75 0 0 1 .75-.75M13.57 11.049a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5h-1.572a.75.75 0 0 1-.75-.75M5.801 11.049a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5H6.55a.75.75 0 0 1-.75-.75M2.613 7.28a.75.75 0 0 1 .848-.638c5.146.73 10.368.73 15.514 0a.75.75 0 1 1 .21 1.485c-5.285.75-10.65.75-15.934 0a.75.75 0 0 1-.638-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.54 2.54a23.7 23.7 0 0 1 7.381 0h.003a2.71 2.71 0 0 1 2.1 1.755l.916 2.546a.8.8 0 0 0 .098.19l1.018 1.364c.513.7.79 1.547.79 2.415a.75.75 0 0 1-1.5.001c0-.549-.175-1.084-.499-1.527L16.83 7.918l-.01-.015a2.3 2.3 0 0 1-.289-.551V7.35l-.92-2.555a1.21 1.21 0 0 0-.924-.774c-2.29-.361-4.62-.361-6.91 0-.41.069-.778.38-.916.773l-.002.007-.922 2.56q-.11.289-.293.537L4.609 9.32a2.56 2.56 0 0 0-.486 1.505v.004l-.015 4.554c0 .069.056.125.125.125h1.734a.125.125 0 0 0 .124-.125v-.358c0-.898.728-1.625 1.625-1.625h4.308a.75.75 0 0 1 0 1.5H7.716a.125.125 0 0 0-.125.125v.358c0 .898-.727 1.625-1.624 1.625H4.233c-.9 0-1.627-.73-1.625-1.63l.015-4.55v-.002a4.06 4.06 0 0 1 .771-2.386l1.043-1.436a.7.7 0 0 0 .094-.17l.914-2.54A2.71 2.71 0 0 1 7.533 2.54z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarLocationOutline;
