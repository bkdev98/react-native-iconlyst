import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink2Broken = ({
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
      d="M3.294 12.973c0-1.067.35-2.103.997-2.95l.316-.415c.646-.847.996-1.571.996-2.636V4.036C5.603 3.464 6.068 3 6.64 3h1.087c.573 0 1.037.464 1.037 1.036v2.936c0 1.065.35 1.789.997 2.636l.316.415c.646.847.996 1.883.996 2.95v6.42c0 .887-.719 1.607-1.606 1.607H4.9a1.607 1.607 0 0 1-1.606-1.607v-3.21M5.604 5.922h3.16M6.937 17.453h4.138M11.074 14.008H6.935M20.56 14.767l.141-1.733a1.125 1.125 0 0 0-1.122-1.218h-4.565c-.657 0-1.176.562-1.121 1.218l.568 6.932A1.127 1.127 0 0 0 15.584 21h3.427c.586 0 1.074-.45 1.122-1.034l.142-1.733"
    />
  </Svg>
);
export default IconlystDrink2Broken;
