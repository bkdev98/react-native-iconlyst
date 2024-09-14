import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerOutline = ({
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
      d="M12.403 6.158a6.73 6.73 0 0 0-6.731 6.732 6.732 6.732 0 1 0 6.732-6.731M4.172 12.89a8.23 8.23 0 0 1 8.231-8.232 8.232 8.232 0 1 1 0 16.463 8.23 8.23 0 0 1-8.231-8.231"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.232 9.28a.75.75 0 0 1 .75.75v3.108l2.373 1.417a.75.75 0 1 1-.77 1.288l-2.737-1.636a.75.75 0 0 1-.366-.644V10.03a.75.75 0 0 1 .75-.75M7.29 3.245a.75.75 0 0 1-.244 1.032 10.1 10.1 0 0 0-3.02 2.873.75.75 0 1 1-1.236-.85A11.6 11.6 0 0 1 6.259 3a.75.75 0 0 1 1.032.245M17.515 3.238a.75.75 0 0 1 1.03-.249 11.6 11.6 0 0 1 3.481 3.312.75.75 0 0 1-1.236.849 10.1 10.1 0 0 0-3.027-2.881.75.75 0 0 1-.248-1.031"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerOutline;
