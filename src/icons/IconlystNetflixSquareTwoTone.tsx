import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNetflixSquareTwoTone = ({
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
      d="m17 15.333-6.575-7.97A1 1 0 0 0 9.654 7H8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1.333a1 1 0 0 0 1-1v-3.293"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7 8.667 6.575 7.97a1 1 0 0 0 .771.363H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1.333a1 1 0 0 0-1 1v3.29"
    />
  </Svg>
);
export default IconlystNetflixSquareTwoTone;
