import * as React from 'react';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNexopiaCircleLight = ({
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
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Rect
      width={3.15}
      height={8.1}
      x={7.5}
      y={7.949}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={0.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.8 7.95a2.7 2.7 0 0 1 2.7 2.7v4.95a.45.45 0 0 1-.45.45H13.8a.45.45 0 0 1-.45-.45V8.4a.45.45 0 0 1 .45-.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNexopiaCircleLight;
