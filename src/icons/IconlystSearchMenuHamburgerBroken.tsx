import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMenuHamburgerBroken = ({
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
      d="M3 16.77h2.5M3 7.21h2.873M3 11.973h1.428M16.717 5.747a6.393 6.393 0 0 1-2.666 12.202 6.392 6.392 0 0 1-.959-12.711M18.4 16.239l2.6 2.594"
    />
  </Svg>
);
export default IconlystSearchMenuHamburgerBroken;
