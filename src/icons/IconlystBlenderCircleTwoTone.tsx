import * as React from 'react';
import Svg, { Ellipse, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlenderCircleTwoTone = ({
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
    <Ellipse
      cx={14.02}
      cy={13.091}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={3.98}
      ry={3.74}
    />
    <Ellipse
      cx={14.02}
      cy={13.092}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={1.424}
      ry={1.338}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.482 7.168 4.102 3.06M10.526 11.285 6 14.897M7.724 9.586l4.632.106"
    />
    <Circle
      cx={12}
      cy={12.484}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBlenderCircleTwoTone;
