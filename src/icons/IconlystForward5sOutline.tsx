import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForward5sOutline = ({
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
      d="M8.563 9.352a.75.75 0 0 1 .75-.75h2.984a.75.75 0 0 1 0 1.5h-2.235v1.077h1.131a2.111 2.111 0 1 1 0 4.223h-1.88a.75.75 0 0 1 0-1.5h1.88a.612.612 0 0 0 0-1.223h-1.88a.75.75 0 0 1-.75-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.334 12a9 9 0 0 1 17.998-.204.75.75 0 0 1-1.5.034 7.5 7.5 0 1 0-1.323 4.427.75.75 0 0 1 1.234.853A9 9 0 0 1 2.333 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.459 9.151a.75.75 0 0 1 .275 1.025l-1.28 2.22a.75.75 0 0 1-1.025.275l-2.208-1.274a.75.75 0 0 1 .75-1.299l1.558.899.905-1.57a.75.75 0 0 1 1.025-.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForward5sOutline;
