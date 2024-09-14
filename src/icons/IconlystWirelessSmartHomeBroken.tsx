import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeBroken = ({
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
      d="M12.042 21H6.619a3.11 3.11 0 0 1-3.126-3.095v-7.842a2.17 2.17 0 0 1 .865-1.714l5.898-4.732a2.86 2.86 0 0 1 3.55 0l5.92 4.727a2.19 2.19 0 0 1 .867 1.71v7.854A3.11 3.11 0 0 1 17.465 21h-1.959M8.666 16.975v.041"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.666 13.543a3.473 3.473 0 0 1 3.474 3.474M8.666 10.09a6.927 6.927 0 0 1 6.927 6.927"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeBroken;
