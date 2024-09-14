import * as React from 'react';
import Svg, { Circle, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVennDiagramLight = ({
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
      cx={9.093}
      cy={14.947}
      r={5.593}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Circle
      cx={15.907}
      cy={14.947}
      r={5.593}
      stroke={props.color}
      strokeWidth={1.5}
    />
    <Ellipse
      cx={12.371}
      cy={9.29}
      stroke={props.color}
      strokeWidth={1.5}
      rx={5.657}
      ry={5.593}
    />
  </Svg>
);
export default IconlystVennDiagramLight;
