import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCloseBroken = ({
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
      d="M5.445 19.97h8.585M21.464 16.423l-3.422 3.422m3.458.036-3.49-3.49M4.089 12.544c1.237-.514 3.68-1.563 4.939-2.086L6.72 4.869c.625-.223 1.196-.481 1.796-.625.7-.168 1.302.15 1.817.6a188 188 0 0 1 3.515 3.137c.291.268.522.293.871.14 1.003-.442 2.01-.884 3.042-1.255 1.192-.431 2.89-.476 3.312 1.028.332 1.186-.69 2.197-1.696 2.621a932 932 0 0 1-4.516 1.893"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 11.134c.09.214.438 1.06.528 1.273C5.044 14.79 6.94 15.63 9.334 14.67q1.1-.442 2.197-.89"
    />
  </Svg>
);
export default IconlystPlaneCloseBroken;
