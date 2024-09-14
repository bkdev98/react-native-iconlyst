import * as React from 'react';
import Svg, { Rect, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSteeringWheelSquareTwoTone = ({
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
    <Rect
      width={18}
      height={18}
      x={3.25}
      y={3.885}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
      rx={5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.596 11.126H9.61l.603-.673c.253-.282.614-.443.993-.443h2.087c.38 0 .74.161.993.443l.603.673h3.015"
      opacity={0.4}
    />
    <Circle
      cx={12.25}
      cy={12.885}
      r={6}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12.25}
      cy={13.341}
      r={1}
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
      d="M6.399 13.947c3.188 0 4.513 1.677 4.513 4.777M18.102 13.947c-3.189 0-4.514 1.677-4.514 4.777"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSteeringWheelSquareTwoTone;
