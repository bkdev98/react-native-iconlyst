import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLandingBroken = ({
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
      d="M5.736 21h14.126M4.919 6.676c1.238.512 3.707 1.498 4.967 2.017l2.32-5.584c.6.285 1.187.506 1.712.828.613.376.814 1.027.86 1.71.104 1.567.203 3.134.268 4.703.017.396.162.577.517.716 1.022.396 2.046.796 3.039 1.262 1.147.538 2.38 1.707 1.614 3.07-.603 1.073-2.041 1.065-3.052.654a935 935 0 0 1-4.531-1.855"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.498 5.262c-.088.214-.44 1.06-.527 1.274-.966 2.403-.219 4.336 2.153 5.35q1.09.466 2.182.925"
    />
  </Svg>
);
export default IconlystPlaneLandingBroken;
