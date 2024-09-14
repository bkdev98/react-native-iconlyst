import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKucoinOutline = ({
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
      d="M14.755 21.747a2.69 2.69 0 0 1-1.89-.772l-4.84-4.85v2.484a2.4 2.4 0 1 1-4.8 0V5.396a2.4 2.4 0 1 1 4.8 0v2.467l4.837-4.83a2.683 2.683 0 0 1 3.789 0l3.97 3.982a2.18 2.18 0 0 1 .654 1.554 2.2 2.2 0 0 1-.654 1.582 2.28 2.28 0 0 1-3.13.008l-2.736-2.745-4.578 4.578 4.579 4.58 2.5-2.5a2.233 2.233 0 0 1 3.626.717c.113.27.17.559.169.851a2.2 2.2 0 0 1-.648 1.57l-3.755 3.764a2.7 2.7 0 0 1-1.893.773m-7.48-8.184a.75.75 0 0 1 .532.22l6.117 6.128a1.2 1.2 0 0 0 1.67 0l3.752-3.76a.71.71 0 0 0 .209-.51.69.69 0 0 0-.21-.5.73.73 0 0 0-1.03 0l-3.028 3.03a.77.77 0 0 1-1.06 0l-5.64-5.642a.75.75 0 0 1 0-1.06l5.64-5.639a.747.747 0 0 1 1.06.001l3.257 3.266a.74.74 0 0 0 1.016 0 .72.72 0 0 0 .16-.784.7.7 0 0 0-.156-.229l-3.975-3.988a1.18 1.18 0 0 0-1.667 0l-6.117 6.11a.751.751 0 0 1-1.281-.532V5.4a.9.9 0 0 0-1.8 0v13.213a.9.9 0 1 0 1.8 0v-4.3a.75.75 0 0 1 .754-.749z"
    />
    <Path
      fill={props.color}
      d="M14.71 14.025a2.021 2.021 0 1 1 .002-4.043 2.021 2.021 0 0 1-.002 4.043m0-2.546a.523.523 0 1 0 .003 1.046.523.523 0 0 0-.002-1.046"
    />
  </Svg>
);
export default IconlystKucoinOutline;
