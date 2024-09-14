import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrink2Light = ({
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
      d="M5.604 6.972V4.036C5.604 3.464 6.068 3 6.64 3h1.088c.572 0 1.036.464 1.036 1.036v2.936c0 1.065.35 1.789.997 2.636l.316.415c.646.847.997 1.883.997 2.95v6.42c0 .887-.72 1.607-1.607 1.607H4.9a1.607 1.607 0 0 1-1.606-1.607v-6.42c0-1.067.35-2.103.997-2.95l.316-.415c.646-.847.997-1.571.997-2.636M5.604 5.924h3.16M6.937 17.454h4.138M11.074 14.008H6.935"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.46 19.966-.567-6.933a1.125 1.125 0 0 1 1.121-1.217h4.566c.657 0 1.176.562 1.121 1.217l-.568 6.933A1.126 1.126 0 0 1 19.011 21h-3.427c-.587 0-1.075-.45-1.123-1.034"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrink2Light;
