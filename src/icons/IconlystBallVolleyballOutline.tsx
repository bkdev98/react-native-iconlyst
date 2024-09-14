import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallVolleyballOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.631 11.347a.75.75 0 0 1 1.022.284 7.25 7.25 0 0 0 7.25 3.625.75.75 0 1 1 .194 1.488 8.75 8.75 0 0 1-8.75-4.375.75.75 0 0 1 .284-1.022M7.17 12.827a.75.75 0 0 1 1.004.343 11.25 11.25 0 0 0 7.968 6.094.75.75 0 1 1-.284 1.473 12.75 12.75 0 0 1-9.031-6.907.75.75 0 0 1 .343-1.003"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 12.007a.75.75 0 0 1-.758.743 7.25 7.25 0 0 0-6.764 4.466.75.75 0 1 1-1.385-.576 8.75 8.75 0 0 1 8.164-5.39.75.75 0 0 1 .743.757M13.7 7.404a.75.75 0 0 1-.8.697 11.25 11.25 0 0 0-9.262 3.854.75.75 0 1 1-1.133-.982 12.75 12.75 0 0 1 10.497-4.369.75.75 0 0 1 .697.8"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.619 12.646a.75.75 0 0 1-.265-1.028 7.25 7.25 0 0 0-.485-8.09.75.75 0 1 1 1.19-.912 8.75 8.75 0 0 1 .587 9.765.75.75 0 0 1-1.027.265M15.13 15.77a.75.75 0 0 1-.204-1.041 11.25 11.25 0 0 0 1.293-9.948.75.75 0 0 1 1.418-.49 12.75 12.75 0 0 1-1.465 11.274.75.75 0 0 1-1.041.205"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallVolleyballOutline;
