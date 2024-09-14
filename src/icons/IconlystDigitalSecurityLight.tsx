import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalSecurityLight = ({
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
    <Circle
      cx={3.741}
      cy={11.721}
      r={1.241}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.981 11.72H7M17.001 11.72h2.017"
    />
    <Circle
      cx={20.259}
      cy={11.721}
      r={1.241}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.963 15.844v2.017"
    />
    <Circle
      cx={11.962}
      cy={19.104}
      r={1.241}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 11.962 19.104)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.004 8.038V6.623a3.004 3.004 0 0 0-6.008-.014v1.43M10.18 15.841h3.64c1.077 0 1.616 0 2.032-.2.415-.199.75-.534.949-.948.2-.416.2-.955.2-2.032v-1.44c0-1.077 0-1.615-.2-2.03-.2-.416-.534-.75-.95-.95s-.954-.2-2.03-.2h-3.642c-1.077 0-1.615 0-2.031.2-.415.2-.75.534-.95.95S7 10.143 7 11.22v1.44c0 1.077 0 1.616.2 2.032.199.414.534.75.949.949.416.2.954.2 2.031.2"
    />
  </Svg>
);
export default IconlystDigitalSecurityLight;
