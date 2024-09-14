import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinbaseOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.905 9.34a3.79 3.79 0 0 0-4.085-.807 3.79 3.79 0 0 0-2.312 3.463c0 1.496.93 2.89 2.312 3.463a3.79 3.79 0 0 0 4.085-.807.75.75 0 1 1 1.059 1.063 5.29 5.29 0 0 1-5.72 1.13 5.29 5.29 0 0 1-3.236-4.85 5.29 5.29 0 0 1 3.237-4.848 5.29 5.29 0 0 1 5.719 1.13.75.75 0 0 1-1.06 1.063"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoinbaseOutline;
