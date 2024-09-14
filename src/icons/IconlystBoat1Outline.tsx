import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoat1Outline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.624 15.774a.75.75 0 0 1 .626-.336h18a.75.75 0 0 1 .638 1.144l-2.49 4.029a2.51 2.51 0 0 1-2.135 1.188H6.49a2.51 2.51 0 0 1-2.308-1.523L2.56 16.482a.75.75 0 0 1 .064-.708m1.762 1.164 1.176 2.748c.158.371.524.613.928.613h10.773c.35 0 .675-.181.86-.479l1.782-2.883z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.654 2.754-.287.693zh.002l.002.001.007.003.023.01.077.034q.1.045.275.132c.232.116.558.29.944.529.77.476 1.79 1.211 2.79 2.255 2.013 2.098 3.939 5.432 3.62 10.32a.75.75 0 0 1-1.497-.097c.287-4.394-1.427-7.332-3.205-9.185a12.9 12.9 0 0 0-2.405-1.96c.454 4.579-.117 8.888-1.368 11.357a.75.75 0 1 1-1.338-.678c1.188-2.346 1.765-6.974 1.044-11.92a.75.75 0 0 1 1.029-.802M10.08 4.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoat1Outline;
