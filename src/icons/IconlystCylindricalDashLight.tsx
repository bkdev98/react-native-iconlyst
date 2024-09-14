import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalDashLight = ({
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
      d="M5.377 6.5v11M18.623 6.5v11M10.272 14.12c.55-.078 1.13-.12 1.728-.12.595 0 1.172.041 1.72.12M5.377 17.5c0-.88.614-1.684 1.628-2.299M16.994 15.201c1.014.615 1.628 1.419 1.628 2.3M5.377 17.501c0 1.933 2.965 3.5 6.623 3.5s6.623-1.567 6.623-3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.623 6.5c0 1.933-2.965 3.5-6.623 3.5S5.377 8.433 5.377 6.5 8.342 3 12 3s6.623 1.567 6.623 3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalDashLight;
