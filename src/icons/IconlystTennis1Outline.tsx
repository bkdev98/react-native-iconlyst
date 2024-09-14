import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTennis1Outline = ({
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
      d="M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.691 4.792a.75.75 0 0 1 1.06-.059A9.73 9.73 0 0 1 10 12a9.73 9.73 0 0 1-3.25 7.267.75.75 0 0 1-1-1.117A8.23 8.23 0 0 0 8.5 12a8.23 8.23 0 0 0-2.75-6.15.75.75 0 0 1-.059-1.058M18.809 4.792a.75.75 0 0 1-.059 1.059A8.23 8.23 0 0 0 16 12a8.23 8.23 0 0 0 2.75 6.149.75.75 0 0 1-1 1.117A9.73 9.73 0 0 1 14.5 12a9.73 9.73 0 0 1 3.25-7.267.75.75 0 0 1 1.059.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTennis1Outline;
