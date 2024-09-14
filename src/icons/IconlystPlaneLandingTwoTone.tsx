import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLandingTwoTone = ({
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
      d="M4.735 6.65c1.268.523 3.794 1.531 5.083 2.063L12.192 3c.613.29 1.214.518 1.752.847.627.386.833 1.05.88 1.75.106 1.602.208 3.207.274 4.811.017.407.164.592.528.733 1.047.406 2.095.815 3.11 1.292 1.174.55 2.434 1.747 1.652 3.14-.618 1.1-2.088 1.091-3.123.67a622 622 0 0 1-10.272-4.261C4.565 10.944 3.801 8.966 4.79 6.508c.09-.221.45-1.085.54-1.304"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.736 21h14.126"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlaneLandingTwoTone;
