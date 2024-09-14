import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlantsLight = ({
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
      strokeWidth={1.5}
      d="M19.661 10.52a2.52 2.52 0 1 0 1.416 4.834M14.689 8.205a3.733 3.733 0 0 1-5.709 4.197M13.17 20.815a2.519 2.519 0 0 0-4.01-3.038"
    />
    <Circle
      cx={14.719}
      cy={14.595}
      r={6.405}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.363 16.946v.012"
    />
    <Circle
      cx={6.564}
      cy={5.595}
      r={2.595}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Circle
      cx={4.49}
      cy={19.614}
      r={1.386}
      stroke={props.color}
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystPlantsLight;
