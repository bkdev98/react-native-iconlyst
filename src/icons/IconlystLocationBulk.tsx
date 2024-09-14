import * as React from 'react';
import Svg, { G, Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero" transform="translate(5 2)">
      <Path d="M3.532.937a6.89 6.89 0 0 1 7.034.058C12.71 2.327 14.012 4.705 14 7.26c-.05 2.54-1.447 4.929-3.193 6.775a18.7 18.7 0 0 1-3.358 2.82A1.2 1.2 0 0 1 7.04 17a.8.8 0 0 1-.39-.119 18.5 18.5 0 0 1-4.839-4.547A9.3 9.3 0 0 1 0 7.134l.005-.273c.09-2.456 1.42-4.7 3.527-5.924m4.375 4.098a2.35 2.35 0 0 0-2.594.52 2.46 2.46 0 0 0-.519 2.64 2.38 2.38 0 0 0 2.198 1.497 2.34 2.34 0 0 0 1.683-.702c.446-.453.696-1.07.694-1.712a2.42 2.42 0 0 0-1.462-2.243" />
      <Ellipse cx={7} cy={19} opacity={0.4} rx={5} ry={1} />
    </G>
  </Svg>
);
export default IconlystLocationBulk;
