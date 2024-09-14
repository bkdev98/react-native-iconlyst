import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeUpBulk = ({
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
      d="m12.869 9.123-.071-4.582a1.771 1.771 0 0 0-3.543.027v10.16L7.988 12.89a1.935 1.935 0 0 0-2.287-.709c-.943.362-1.448 1.386-1.105 2.336.642 1.77 1.66 3.747 2.97 5.375 2.063 2.566 8.366 2.394 10.621.14 1.768-1.768 2.761-5.372 1.752-8.094-1.002-2.706-4.591-2.578-7.07-2.815"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.378 5.03.102-.102v2.333a.79.79 0 0 0 1.58 0V4.927l.102.102a.79.79 0 1 0 1.118-1.118l-1.462-1.46a.79.79 0 0 0-.863-.157.8.8 0 0 0-.226.148l-.02.02-1.45 1.45a.79.79 0 0 0 1.12 1.117"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeUpBulk;
