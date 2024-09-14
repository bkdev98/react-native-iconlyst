import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneFlyBroken = ({
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
      d="M3.503 10.259c1.38.008 4.118-.008 5.522 0l.05-6.228c.684.04 1.33.024 1.957.127.73.121 1.174.664 1.482 1.299a194 194 0 0 1 2.079 4.384c.169.372.377.49.77.482 1.13-.017 2.262-.032 3.39.028 1.303.07 2.932.708 2.73 2.303-.16 1.26-1.535 1.81-2.66 1.808a646 646 0 0 1-5.447-.022"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.51 8.685c-.002.239-.01 1.182-.01 1.421.009 2.668 1.471 4.224 4.128 4.271q1.286.024 2.57.04M5.746 19.97h13.51"
    />
  </Svg>
);
export default IconlystPlaneFlyBroken;
