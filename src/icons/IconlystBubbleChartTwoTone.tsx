import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBubbleChartTwoTone = ({
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
      cx={4.511}
      cy={4.511}
      r={4.511}
      stroke={props.color}
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 13.207 3.119)"
    />
    <Circle
      cx={3.014}
      cy={3.014}
      r={3.014}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
      transform="matrix(-1 0 0 1 20.815 13.128)"
    />
    <Circle
      cx={2.171}
      cy={2.171}
      r={2.171}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
      transform="matrix(-1 0 0 1 9.943 16.776)"
    />
  </Svg>
);
export default IconlystBubbleChartTwoTone;
