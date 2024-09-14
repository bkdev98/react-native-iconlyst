import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleBroken = ({
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
      d="M20.48 15.681v1.863c0 .885-.717 1.603-1.603 1.603h-2.186a1.603 1.603 0 0 1-1.602-1.603V9.819c0-.886.718-1.604 1.602-1.604h2.186c.886 0 1.604.718 1.604 1.604v1.931M4.519 8.787V6.924c0-.886.718-1.603 1.604-1.603h2.185c.885 0 1.603.717 1.603 1.603v7.726c0 .884-.718 1.602-1.603 1.602H6.123a1.603 1.603 0 0 1-1.604-1.602v-1.932M7.216 21V16.26m0-10.94V3m10.57 0v5.206m0 10.942V21"
    />
  </Svg>
);
export default IconlystCandleBroken;
