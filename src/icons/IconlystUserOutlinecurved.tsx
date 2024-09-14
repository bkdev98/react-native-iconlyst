import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserOutlinecurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.58 12.026h.03a5.12 5.12 0 0 0 5.114-5.115A5.12 5.12 0 0 0 9.61 1.797a5.12 5.12 0 0 0-5.113 5.11 5.06 5.06 0 0 0 1.48 3.613 5.07 5.07 0 0 0 3.603 1.506M5.997 6.91A3.62 3.62 0 0 1 9.61 3.297a3.62 3.62 0 0 1 3.614 3.614 3.62 3.62 0 0 1-3.614 3.615h-.027a3.57 3.57 0 0 1-2.54-1.064A3.57 3.57 0 0 1 5.996 6.91M2.05 18.674c0 3.53 5.493 3.53 7.56 3.53 1.869 0 7.559 0 7.559-3.55 0-2.687-3.461-4.958-7.56-4.958-4.097 0-7.558 2.28-7.558 4.978m1.5 0c0-1.642 2.592-3.478 6.06-3.478s6.059 1.825 6.059 3.458c0 1.693-3.295 2.05-6.06 2.05-4.02 0-6.058-.684-6.058-2.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.853 10.826a.75.75 0 0 1-.193-1.475 2.539 2.539 0 0 0-.144-4.938.75.75 0 0 1-.584-.885.745.745 0 0 1 .885-.584A4.05 4.05 0 0 1 20.041 6.9a4.044 4.044 0 0 1-2.995 3.901.8.8 0 0 1-.193.025M18.993 18.02a.75.75 0 0 0 .902.558c1.19-.28 2.054-1.28 2.054-2.376 0-1.727-2.115-3.3-4.437-3.3a.75.75 0 0 0 0 1.5c1.621 0 2.937 1.09 2.937 1.8 0 .347-.336.783-.898.915a.75.75 0 0 0-.558.903"
    />
  </Svg>
);
export default IconlystUserOutlinecurved;
