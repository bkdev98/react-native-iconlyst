import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningInformationLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Circle
      cx={12.25}
      cy={12.5}
      r={3.001}
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
      d="M7.807 8.498a5.974 5.974 0 0 0 0 8.004M16.693 8.498a5.975 5.975 0 0 1 0 8.004"
    />
    <Rect
      width={18.008}
      height={18.008}
      x={3.246}
      y={3.496}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={5}
    />
  </Svg>
);
export default IconlystWarningInformationLight;
