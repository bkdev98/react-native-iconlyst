import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniswapBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.93 17.86c.15-.02.6-.12 1.11-.23 1.77-.36 3.59-1.99 3.59-3.9M8.29 10.07q-.54.285-.99.69c-.23.21-.45.45-.63.71-.14.19-.26.39-.37.6-.37.87-.36 1.36-1.26 2.49-.29.32-.53.68-.73 1.06-.71 1.51.19 3.75 1.9 4.05.61.18 1.59-.23 2.01-.51M9.51 12.39c0-.28.1-.55.3-.74.19-.2.46-.31.73-.32M13.61 9.75h.4a8.194 8.194 0 0 1 7.26 4.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.09 9.35c-1.44-2.64-4.12-3.06-6.44-2.65-1.06-1.23-1.68-1.89-3.59-1.86-.26 1.85.61 3.98.61 3.98L3.73 3l3.55 7.76M16.75 21c-1.59-1.59-4.24-.81-4.24-.81M18.16 15.35s1.78 2.52 1.78 5.43"
    />
  </Svg>
);
export default IconlystUniswapBroken;
