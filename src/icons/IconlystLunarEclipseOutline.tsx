import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLunarEclipseOutline = ({
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
      d="M2.87 11.77A6.49 6.49 0 0 1 13.11 6.728a.75.75 0 0 1-.87 1.222 4.99 4.99 0 1 0 0 8.138.75.75 0 0 1 .87 1.223A6.49 6.49 0 0 1 2.87 11.77"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.31 13.557a3.038 3.038 0 0 1 5.623 1.713 3.04 3.04 0 0 1-1.67 2.598.75.75 0 0 1-.676-1.34 1.539 1.539 0 1 0-2.002-2.183.75.75 0 0 1-1.276-.789M9.077 5.627a.75.75 0 0 1 .449.961q-.107.293-.122.624a2.06 2.06 0 0 0 1.447 2.044.75.75 0 0 1-.442 1.433 3.56 3.56 0 0 1-2.504-3.535l.75.03-.75-.03c.015-.377.088-.74.211-1.078a.75.75 0 0 1 .961-.449M7.47 9.924a.75.75 0 0 1-.565.898l-.007.001a.75.75 0 0 1-.332-1.463l.007-.001a.75.75 0 0 1 .897.565M16.018 2.605a.75.75 0 0 1 .75.75v.93a.75.75 0 1 1-1.5 0v-.93a.75.75 0 0 1 .75-.75m-3.841.753a.75.75 0 0 1 1.023.28l.482.841a.75.75 0 1 1-1.303.745l-.481-.842a.75.75 0 0 1 .279-1.024m7.684 0a.75.75 0 0 1 .278 1.024l-.481.842a.75.75 0 0 1-1.302-.745l.481-.842a.75.75 0 0 1 1.024-.279M16.018 21.395a.75.75 0 0 0 .75-.75v-.93a.75.75 0 1 0-1.5 0v.93c0 .414.336.75.75.75m-3.841-.753a.75.75 0 0 0 1.023-.28l.482-.841a.75.75 0 1 0-1.303-.745l-.481.842a.75.75 0 0 0 .279 1.024m7.684 0a.75.75 0 0 0 .278-1.024l-.481-.842a.75.75 0 0 0-1.302.745l.481.842a.75.75 0 0 0 1.024.279"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.93 7.084a4.935 4.935 0 1 0 0 9.871 4.935 4.935 0 0 0 0-9.87M9.495 12.02a6.434 6.434 0 1 1 12.87 0 6.435 6.435 0 1 1-12.87 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLunarEclipseOutline;
