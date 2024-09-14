import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAngryHornsBroken = ({
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
      d="M12.25 21a9 9 0 0 1-9-9c0-1.187.235-2.319.653-3.356C2.349 4.631 4.434 3 4.434 3c.108 1.557 1.376 2.213 1.744 2.371A8.95 8.95 0 0 1 12.25 3c2.343 0 4.47.903 6.071 2.371.368-.158 1.636-.814 1.745-2.371 0 0 2.085 1.63.53 5.644A9 9 0 0 1 21.25 12a9 9 0 0 1-5.97 8.477"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.547 9.139c-.38.293-.351 2.55.662 3.141 1.259.736 3.23-.46 2.642-1.153-.315-.37-.895-.788-1.483-1.145M10.266 15.841c1.196-.516 2.539-.433 3.966 0M16.95 9.139c.38.293.351 2.55-.662 3.141-1.258.736-3.229-.46-2.641-1.153.276-.325.757-.687 1.268-1.012"
    />
  </Svg>
);
export default IconlystAngryHornsBroken;
