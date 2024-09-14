import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneSecurityBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.453 20.457h7.621"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.055 20.812s2.423-.734 2.423-2.756c0-2.024.089-2.18-.107-2.376-.194-.197-1.998-.825-2.316-.825s-2.123.63-2.317.825c-.195.194-.107.352-.107 2.376 0 2.022 2.424 2.756 2.424 2.756"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.45 12.894c1.238-.513 3.68-1.562 4.939-2.086L7.08 5.22c.626-.223 1.197-.482 1.796-.626.7-.167 1.302.15 1.818.601a189 189 0 0 1 3.514 3.136c.292.269.522.294.872.141 1.003-.442 2.01-.884 3.041-1.256 1.192-.43 2.89-.476 3.312 1.029.333 1.186-.69 2.197-1.696 2.62a938 938 0 0 1-4.515 1.893"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.861 11.484c.09.214.438 1.06.529 1.274 1.015 2.383 2.91 3.221 5.305 2.261q1.1-.44 2.197-.889"
    />
  </Svg>
);
export default IconlystPlaneSecurityBroken;
