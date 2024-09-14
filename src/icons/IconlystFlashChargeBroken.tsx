import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashChargeBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 7.703a9 9 0 0 0-16.71 2.96"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.242 4.406v3.3H16.96M11.447 16.138v-2.895H8.708a.497.497 0 0 1-.402-.79l3.347-4.61c.283-.39.9-.19.9.292v2.895h2.74c.405 0 .64.461.402.79l-1.674 2.305"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.664 15.068c1.614 4.7 6.735 7.196 11.435 5.572a8.96 8.96 0 0 0 5.733-6.093"
    />
  </Svg>
);
export default IconlystFlashChargeBroken;
