import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLockBroken = ({
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
      d="M5.365 19.988h7.275"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.298 20.554h-2.423a1.2 1.2 0 0 1-1.203-1.202v-1.36c0-.665.538-1.204 1.203-1.204h2.423c.665 0 1.203.54 1.203 1.204v1.36c0 .664-.538 1.202-1.203 1.202"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.533 16.812v-.895a1.447 1.447 0 0 0-2.892-.006v.9M3.635 12.9c1.237-.514 3.68-1.562 4.938-2.086L6.266 5.226c.625-.223 1.196-.482 1.796-.626.7-.167 1.301.15 1.817.601a188 188 0 0 1 3.514 3.136c.292.269.523.294.872.141 1.003-.443 2.01-.884 3.042-1.256 1.192-.431 2.89-.476 3.312 1.028.332 1.186-.69 2.197-1.696 2.622a942 942 0 0 1-4.516 1.892"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.046 11.49c.09.214.438 1.06.528 1.274 1.016 2.383 2.911 3.221 5.306 2.261q1.1-.44 2.196-.89"
    />
  </Svg>
);
export default IconlystPlaneLockBroken;
