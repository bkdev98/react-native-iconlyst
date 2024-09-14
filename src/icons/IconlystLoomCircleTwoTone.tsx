import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoomCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Circle
      cx={11.992}
      cy={12.002}
      r={2.088}
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
      d="M12 9.912V7M12 16.998v-2.912M14.088 12H17M7 12h2.912M13.044 10.194 14.5 7.672M9.5 16.33l1.456-2.521M13.808 13.044 16.33 14.5M7.67 9.5l2.521 1.457M13.808 10.956 16.33 9.5M7.67 14.5l2.521-1.457M13.044 13.806l1.456 2.522M9.5 7.67l1.456 2.521"
    />
  </Svg>
);
export default IconlystLoomCircleTwoTone;
