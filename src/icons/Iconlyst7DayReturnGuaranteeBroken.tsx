import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7DayReturnGuaranteeBroken = ({
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
      d="m12.779 15.342 1.777-5.727h-3.61M20.13 4.858l.003 2.233-2.22.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.133 7.093a8.92 8.92 0 0 0-9.336-3.863M7.956 4.375A8.9 8.9 0 0 0 3.75 11.52M5.105 19.087l-.001-2.233 2.22-.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.367 16.905a8.92 8.92 0 0 0 9.342 3.861M17.544 19.621a8.9 8.9 0 0 0 4.206-7.144"
    />
  </Svg>
);
export default Iconlyst7DayReturnGuaranteeBroken;
