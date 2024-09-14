import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCrashLight = ({
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
      d="M9.998 17.848q0 .304-.088.595a2.204 2.204 0 0 1-4.245 0 2.1 2.1 0 0 1-.077-.595 2.207 2.207 0 0 1 2.205-2.205 2.204 2.204 0 0 1 2.205 2.205M3.25 5.995h.992a1.35 1.35 0 0 1 1.18.705l2.503 4.632M5.3 17.847H3.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 11.387h6.759a2.46 2.46 0 0 1 2.458 2.458v1.908a2.46 2.46 0 0 1-2.458 2.458v0M13.594 5.995V3.95M19.205 12.085h2.045M11.585 8.628l1.008.903h1.87l.23 1.722 1.47.861-1.178 1.65.38 1.206M17.76 16.765l1.445 1.446M17.564 7.601l1.445-1.446"
    />
  </Svg>
);
export default IconlystCarCrashLight;
