import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCircleLineOutline = ({
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
      d="M8.525 16.7a.75.75 0 0 1 .75-.75h5.451a.75.75 0 0 1 0 1.5h-5.45a.75.75 0 0 1-.75-.75M8.432 10.342a.75.75 0 0 1 1.06.002L12 12.86l2.509-2.517a.75.75 0 1 1 1.062 1.058l-3.04 3.05a.75.75 0 0 1-1.063 0l-3.037-3.05a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.55a.75.75 0 0 1 .75.75v6.624a.75.75 0 0 1-1.5 0V7.3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownCircleLineOutline;
