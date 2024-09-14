import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLanding2Broken = ({
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
      d="m17.545 17.934 1.977 1.87 1.978-1.87M19.523 19.804v-5.323M5.406 19.805h8.407M3.991 12.48c1.238-.514 3.68-1.562 4.939-2.086L6.622 4.806c.626-.223 1.197-.482 1.796-.626.7-.167 1.302.15 1.818.601a188 188 0 0 1 3.514 3.136c.292.269.522.294.872.141 1.003-.442 2.01-.884 3.041-1.256 1.192-.43 2.89-.476 3.312 1.029.333 1.186-.69 2.196-1.696 2.62a942 942 0 0 1-4.515 1.893"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.402 11.07c.09.214.438 1.06.529 1.274 1.015 2.383 2.91 3.221 5.305 2.261q1.1-.44 2.197-.889"
    />
  </Svg>
);
export default IconlystPlaneLanding2Broken;
