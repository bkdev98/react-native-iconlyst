import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinWifiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.474 10.527C4.474 15.882 10.795 21 12 21c1.204 0 7.526-5.118 7.526-10.473a7.526 7.526 0 1 0-15.052 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.262 11.436a2.7 2.7 0 0 1 3.482-.005M8.581 9.323a5.48 5.48 0 0 1 6.838 0M12 13.497v.041"
    />
  </Svg>
);
export default IconlystPinWifiLight;
