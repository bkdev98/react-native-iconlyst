import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoveUpBroken = ({
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
      d="M20.25 8.3a1.7 1.7 0 0 1-1.7 1.7h-2.6a1.7 1.7 0 0 1-1.7-1.7V5.7a1.7 1.7 0 0 1 1.7-1.7h2.6a1.7 1.7 0 0 1 1.7 1.7M14.25 18.3a1.7 1.7 0 0 0 1.7 1.7h2.6a1.7 1.7 0 0 0 1.7-1.7v-2.6a1.7 1.7 0 0 0-1.7-1.7h-2.6a1.7 1.7 0 0 0-1.7 1.7M10.25 19.373A6 6 0 0 1 6.007 9.13c1.32-1.32 2.923-2.01 5.132-2.144"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.646 5.545 2.53 1.44-1.44 2.53"
    />
  </Svg>
);
export default IconlystMoveUpBroken;
