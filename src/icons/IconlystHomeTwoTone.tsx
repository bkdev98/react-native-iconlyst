import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeTwoTone = ({
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
      d="m15 3.895 5.052 4.135a3.95 3.95 0 0 1 1.378 3.797l-1.143 5.964a3.95 3.95 0 0 1-3.877 3.205H8.59a3.95 3.95 0 0 1-3.878-3.205l-1.141-5.964A3.95 3.95 0 0 1 4.947 8.03l5.052-4.135a3.95 3.95 0 0 1 5.001 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.305 14.135c.777 1.011 1.922 1.643 3.192 1.643s2.416-.632 3.193-1.643"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHomeTwoTone;
