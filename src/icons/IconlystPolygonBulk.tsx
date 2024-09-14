import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.06 2.652a2.7 2.7 0 0 0-1.976.794l-.697.699a1.7 1.7 0 0 1-1.197.494h-1a2.704 2.704 0 0 0-2.702 2.7v1a1.7 1.7 0 0 1-.494 1.197l-.713.712a2.704 2.704 0 0 0 .016 3.815l.7.7c.313.315.493.75.493 1.197v1c0 1.488 1.211 2.7 2.7 2.7h.997c.453 0 .878.175 1.197.492l.711.712a2.67 2.67 0 0 0 1.9.785h.066z"
    />
    <Path
      fill={props.color}
      d="M12.06 21.65V2.651a2.68 2.68 0 0 1 1.842.783l.712.71c.314.315.75.494 1.194.494h1.003a2.703 2.703 0 0 1 2.7 2.7v1c0 .448.18.883.494 1.197l.7.7a2.705 2.705 0 0 1 .012 3.816l-.711.71c-.314.316-.494.75-.494 1.198v1a2.706 2.706 0 0 1-2.701 2.7h-1.004c-.453 0-.876.176-1.196.493l-.7.7a2.68 2.68 0 0 1-1.85.796"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPolygonBulk;
