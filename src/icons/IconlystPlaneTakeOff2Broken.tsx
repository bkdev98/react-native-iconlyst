import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneTakeOff2Broken = ({
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
      d="M5.455 20.01h14.09M4.27 12.447c1.238-.514 3.681-1.562 4.94-2.086L6.9 4.772c.626-.222 1.197-.481 1.796-.625.7-.168 1.302.15 1.818.601a189 189 0 0 1 3.514 3.136c.292.268.523.294.872.141 1.003-.443 2.01-.884 3.041-1.256 1.192-.431 2.89-.476 3.312 1.028.333 1.186-.69 2.197-1.696 2.622a942 942 0 0 1-4.515 1.892"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.682 11.037c.09.214.437 1.06.528 1.274 1.016 2.382 2.911 3.221 5.305 2.26q1.1-.44 2.197-.888"
    />
  </Svg>
);
export default IconlystPlaneTakeOff2Broken;
