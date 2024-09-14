import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourReturnGuaranteeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.392 4.914.002 2.233-2.22.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.133 7.093a8.92 8.92 0 0 0-9.284-3.874M7.956 4.375A8.9 8.9 0 0 0 3.75 11.52M5.105 19.087l-.001-2.233 2.22-.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.367 16.905a8.92 8.92 0 0 0 9.052 3.918M17.544 19.621a8.9 8.9 0 0 0 4.206-7.144M16.453 14.405v-1.21m0 0h1.025m-1.025 0h-2.949l2.95-4.1zM8.774 10.527a1.414 1.414 0 0 1 2.828 0c0 1.767-2.827 1.767-2.827 3.86h2.827"
    />
  </Svg>
);
export default Iconlyst24HourReturnGuaranteeBroken;
