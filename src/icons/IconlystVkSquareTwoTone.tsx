import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkSquareTwoTone = ({
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
      d="M16.925 8.984a8.2 8.2 0 0 1-1.22 1.842c-.44.492-.954.906-1.576 1.132-.42.148-.847.19-1.28.201M16.925 15.329a8.2 8.2 0 0 0-1.22-1.842c-.44-.486-.954-.906-1.576-1.132-.42-.148-.847-.189-1.28-.195h-.634M10.928 8.988h1.267v6.334h-.002c-3.782 0-5.152-4.59-5.152-6.334"
    />
  </Svg>
);
export default IconlystVkSquareTwoTone;
