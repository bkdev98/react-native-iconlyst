import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessScreenShareTwoTone = ({
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
      d="M3.69 7.944C3.69 5.047 5.503 3 8.394 3h8.297c2.9 0 4.705 2.047 4.705 4.944v7.817c0 2.897-1.805 4.945-4.706 4.945"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.357 16.848a3.693 3.693 0 0 1 3.694 3.695M4.44 20.43v.064m.261-.05a.262.262 0 1 1-.523 0 .262.262 0 0 1 .523 0M4.358 13.176a7.366 7.366 0 0 1 7.366 7.367"
    />
  </Svg>
);
export default IconlystWirelessScreenShareTwoTone;
