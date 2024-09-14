import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOpenMouthBulk = ({
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
      d="M12.5 2.5C7.262 2.5 3 6.761 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.25 9.026a.976.976 0 0 0 1.951 0 .977.977 0 0 0-1.668-.687.97.97 0 0 0-.283.687M15.725 10a.976.976 0 0 1-.692-1.661.977.977 0 0 1 1.668.687.976.976 0 0 1-.976.975"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.979 15.028A2.525 2.525 0 0 0 12.5 17.55a2.526 2.526 0 0 0 2.523-2.522 2.526 2.526 0 0 0-2.523-2.522 2.525 2.525 0 0 0-2.521 2.522m1.5 0a1.022 1.022 0 1 1 2.044.001 1.022 1.022 0 0 1-2.044-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOpenMouthBulk;
