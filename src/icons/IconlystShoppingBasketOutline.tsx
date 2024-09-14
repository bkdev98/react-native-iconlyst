import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBasketOutline = ({
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
      d="M4.315 10.568c-.319.42-.496 1.172-.198 2.457l.004.017.97 4.653.003.017c.301 1.642 1.447 2.181 2.242 2.181h9.757c.795 0 1.94-.54 2.241-2.18l.004-.018.97-4.653.004-.017c.298-1.285.121-2.038-.198-2.456-.313-.412-.917-.702-1.948-.702H6.263c-1.031 0-1.635.29-1.948.701M3.12 9.66c.71-.932 1.866-1.293 3.142-1.293h11.903c1.276 0 2.433.36 3.142 1.293.703.924.811 2.207.467 3.696l-.967 4.636c-.443 2.396-2.25 3.401-3.715 3.401H7.336c-1.466 0-3.272-1.005-3.715-3.4l-.967-4.637c-.344-1.489-.236-2.772.467-3.696"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.11 3.65a2.644 2.644 0 0 1 4.21 0l3.78 4.972a.75.75 0 1 1-1.195.908l-3.78-4.973a1.144 1.144 0 0 0-1.821 0L7.524 9.53a.75.75 0 0 1-1.193-.908zM12.214 14.008a.881.881 0 1 0-.001 1.762.881.881 0 0 0 0-1.762m-2.382.88a2.381 2.381 0 1 1 4.762.001 2.381 2.381 0 0 1-4.762 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShoppingBasketOutline;
