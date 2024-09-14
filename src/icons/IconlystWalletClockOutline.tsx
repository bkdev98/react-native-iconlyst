import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletClockOutline = ({
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
      d="M7.264 13.031a3.265 3.265 0 1 0 .002 6.53 3.265 3.265 0 0 0-.002-6.53M2.5 16.297a4.765 4.765 0 1 1 9.53-.001 4.765 4.765 0 0 1-9.53 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.242 14.2a.75.75 0 0 1 .75.75v1.205l.905.541a.75.75 0 0 1-.77 1.288l-1.27-.76a.75.75 0 0 1-.365-.643v-1.632a.75.75 0 0 1 .75-.75M17.44 10.094a1.78 1.78 0 1 0 0 3.562h3.808a.75.75 0 0 1 0 1.5h-3.807a3.28 3.28 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.494 11.816a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.185 4.185 0 0 0 4 8.622V9.73a.75.75 0 1 1-1.5 0V8.622a5.685 5.685 0 0 1 5.686-5.684h8.128A5.685 5.685 0 0 1 22 8.622v6.75a5.685 5.685 0 0 1-5.686 5.686h-2.486a.75.75 0 1 1 0-1.5h2.486a4.185 4.185 0 0 0 4.186-4.185v-6.75a4.185 4.185 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletClockOutline;
