import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageDotOutline = ({
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
      d="M3.926 4.534c.946-1.02 2.295-1.59 3.89-1.59h4.931a.75.75 0 0 1 0 1.5h-4.93c-1.224 0-2.158.427-2.79 1.11C4.386 6.243 4 7.253 4 8.508v7.566c0 1.26.381 2.266 1.014 2.951.627.678 1.56 1.106 2.803 1.106h8.05c1.224 0 2.159-.427 2.791-1.107.639-.687 1.026-1.695 1.026-2.95v-4.716a.75.75 0 0 1 1.5 0v4.716c0 1.563-.486 2.959-1.427 3.97-.947 1.02-2.296 1.587-3.89 1.587h-8.05c-1.61 0-2.96-.567-3.904-1.588-.937-1.014-1.413-2.41-1.413-3.97V8.509c0-1.563.486-2.96 1.426-3.974"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.895 3.87a1.606 1.606 0 1 0 0 3.212 1.606 1.606 0 0 0 0-3.212m-3.106 1.606a3.106 3.106 0 1 1 6.212 0 3.106 3.106 0 0 1-6.212 0M7.592 10.8a.75.75 0 0 1 .75-.75h1.945a.75.75 0 0 1 0 1.5H8.342a.75.75 0 0 1-.75-.75m0 4.191a.75.75 0 0 1 .75-.75h4.767a.75.75 0 1 1 0 1.5H8.342a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageDotOutline;
