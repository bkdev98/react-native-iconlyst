import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenAILight = ({
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
      d="m11.985 14.875-5.348-3.111V6.95c.003-1.293.677-2.467 1.503-3.202 1.716-1.527 4.852-1.325 6.185.765"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.015 9.125 5.347 3.111v4.813c-.002 1.293-.676 2.467-1.502 3.202-1.717 1.527-4.853 1.326-6.185-.764"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.501 13.42.031-6.187 4.172-2.4c1.122-.642 2.476-.643 3.525-.293 2.18.727 3.569 3.546 2.42 5.743"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.499 10.58-.031 6.187-4.173 2.4c-1.122.641-2.476.643-3.524.293-2.18-.727-3.569-3.546-2.421-5.743"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.53 10.528 14.927 7.5l4.147 2.444c1.112.658 1.782 1.835 1.995 2.92.445 2.254-1.32 4.853-3.798 4.94"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.47 13.472-5.396 3.027-4.147-2.443c-1.112-.659-1.782-1.835-1.996-2.92-.444-2.254 1.322-4.854 3.799-4.94"
    />
  </Svg>
);
export default IconlystOpenAILight;
