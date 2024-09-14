import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeDownBold = ({
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
      d="m12.37 9.125-.072-4.582a1.771 1.771 0 0 0-3.542.026V14.73l-1.267-1.84a1.935 1.935 0 0 0-2.287-.708c-.944.362-1.448 1.386-1.105 2.336.642 1.77 1.66 3.747 2.97 5.374 2.063 2.567 8.365 2.395 10.62.14 1.768-1.767 2.761-5.37 1.752-8.093-1.002-2.706-4.59-2.577-7.07-2.814M17.209 7.819l.02.02a.799.799 0 0 0 1.089-.008l.004-.003.002-.002q.003-.003.004-.006l1.451-1.45a.79.79 0 1 0-1.117-1.118l-.102.103V3.02a.79.79 0 0 0-1.581 0v2.332l-.1-.1A.79.79 0 0 0 15.76 6.37z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeDownBold;
