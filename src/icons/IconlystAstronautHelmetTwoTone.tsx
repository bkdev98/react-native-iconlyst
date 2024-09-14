import * as React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAstronautHelmetTwoTone = ({
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
      cx={12.613}
      cy={12.614}
      r={2}
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
      d="M4.615 19.613a1 1 0 0 1 1-1h13.998a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5.615a1 1 0 0 1-1-1zM19.612 18.613V17.1c0-1.005-.547-1.573-1.543-1.702l-5.456-.784"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m10.95 11.474 3.917-6.31c.338-.546.08-1.267-.55-1.388a8.993 8.993 0 0 0-8.401 14.838M14.75 5.378a7.437 7.437 0 0 1 4.02 10.112" />
    </G>
  </Svg>
);
export default IconlystAstronautHelmetTwoTone;
