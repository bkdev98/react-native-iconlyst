import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.4 12c0 5.376 4.374 9.75 9.75 9.75S21.9 17.376 21.9 12s-4.374-9.75-9.75-9.75S2.4 6.624 2.4 12m1.5 0c0-4.549 3.701-8.25 8.25-8.25 4.55 0 8.25 3.701 8.25 8.25s-3.7 8.25-8.25 8.25S3.9 16.549 3.9 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.502 11.35a3.334 3.334 0 0 1-3.33 3.332 3.334 3.334 0 0 1-3.33-3.331 3.334 3.334 0 0 1 3.33-3.331 3.334 3.334 0 0 1 3.33 3.33"
    />
    <Path
      fill={props.color}
      d="M16.91 18.752a8.04 8.04 0 0 1-4.77 1.563 8.04 8.04 0 0 1-4.75-1.548c.563-1.39 2.095-2.527 4.762-2.527 2.663 0 4.194 1.13 4.759 2.512"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserCircleBulk;
