import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleSquareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.206 6.867-.628.834M8.488 10.718a3.15 3.15 0 0 0-.493 1.912c.003.668.13 1.33.375 1.953.28.773.714 1.48 1.278 2.077a1.206 1.206 0 0 0 1.58.3 2.1 2.1 0 0 1 1.855-.034c.6.374 1.386.21 1.79-.37a5.7 5.7 0 0 0 1.087-1.824c.083-.235.084-.231-.13-.36a2.1 2.1 0 0 1-1.063-1.45 2.15 2.15 0 0 1 .855-2.233c.129-.1.156-.168.045-.292a2.27 2.27 0 0 0-2.14-.78 3.6 3.6 0 0 0-.888.276c-.365.176-.79.17-1.149-.018a2.274 2.274 0 0 0-3.002.843"
    />
  </Svg>
);
export default IconlystAppleSquareTwoTone;
