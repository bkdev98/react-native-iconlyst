import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessSmartHomeTwoTone = ({
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
      d="M21.092 17.908A3.11 3.11 0 0 1 17.964 21H7.118a3.11 3.11 0 0 1-3.125-3.095v-7.842a2.17 2.17 0 0 1 .865-1.714l5.897-4.732a2.86 2.86 0 0 1 3.55 0l5.921 4.727a2.19 2.19 0 0 1 .866 1.71z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.166 16.974v.042M9.166 13.543a3.473 3.473 0 0 1 3.474 3.474M9.166 10.09a6.927 6.927 0 0 1 6.927 6.927"
    />
  </Svg>
);
export default IconlystWirelessSmartHomeTwoTone;
