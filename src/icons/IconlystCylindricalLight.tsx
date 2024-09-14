import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalLight = ({
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
      d="M5.377 6.5v11M18.623 6.5v11"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.622 17.5c0 1.934-2.965 3.5-6.622 3.5s-6.623-1.566-6.623-3.5c0-1.932 2.965-3.499 6.623-3.499 3.657 0 6.622 1.567 6.622 3.5M18.622 6.5c0 1.933-2.965 3.5-6.622 3.5S5.377 8.432 5.377 6.5 8.342 3 12 3c3.657 0 6.622 1.567 6.622 3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalLight;
