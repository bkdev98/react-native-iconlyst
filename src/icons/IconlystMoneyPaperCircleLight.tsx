import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.81 17.623H6.19c-1.965 0-3.187-1.39-3.187-3.359V6.847c0-1.968 1.228-3.359 3.187-3.359h11.622C19.777 3.488 21 4.88 21 6.848v4.408"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 13.236a3.35 3.35 0 0 1 3.419.821 3.38 3.38 0 0 1 .775 3.564M7.185 3.484a3.37 3.37 0 0 1-.765 3.573A3.36 3.36 0 0 1 3 7.878M16.814 3.484a3.35 3.35 0 0 0 .773 3.573c.927.93 2.24 1.2 3.411.821M14.29 10.555a2.29 2.29 0 0 0-2.288-2.293 2.29 2.29 0 0 0-2.287 2.293 2.29 2.29 0 0 0 2.287 2.294M17.5 13.56c1.932 0 3.5 1.572 3.5 3.51a3.505 3.505 0 0 1-3.5 3.509 3.505 3.505 0 0 1-3.5-3.51 3.505 3.505 0 0 1 3.5-3.508M17.5 16.484v1.17"
    />
  </Svg>
);
export default IconlystMoneyPaperCircleLight;
