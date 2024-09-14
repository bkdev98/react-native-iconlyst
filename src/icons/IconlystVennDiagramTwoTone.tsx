import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVennDiagramTwoTone = ({
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
      cx={12.5}
      cy={7.619}
      r={4.5}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Circle
      cx={12.5}
      cy={16.619}
      r={4.5}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Circle
      cx={17}
      cy={12.119}
      r={4.5}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
      transform="rotate(90 17 12.119)"
    />
    <Circle
      cx={8}
      cy={12.119}
      r={4.5}
      stroke={props.color}
      strokeWidth={1.5}
      opacity={0.4}
      transform="rotate(90 8 12.119)"
    />
  </Svg>
);
export default IconlystVennDiagramTwoTone;
