import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeDownBulk = ({
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
      d="m12.87 9.123-.071-4.582a1.771 1.771 0 0 0-3.543.027v10.16L7.989 12.89a1.935 1.935 0 0 0-2.287-.708c-.943.361-1.448 1.386-1.105 2.335.642 1.771 1.66 3.747 2.97 5.375 2.063 2.566 8.365 2.394 10.62.14 1.768-1.768 2.761-5.371 1.752-8.094-1.002-2.705-4.59-2.577-7.07-2.814"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.709 7.819.02.02a.799.799 0 0 0 .847.15.8.8 0 0 0 .243-.158l.003-.003.002-.002q.004-.003.004-.006l1.451-1.45a.79.79 0 1 0-1.117-1.118l-.102.103V3.02a.79.79 0 0 0-1.581 0v2.332l-.1-.1A.79.79 0 0 0 16.26 6.37z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeDownBulk;
