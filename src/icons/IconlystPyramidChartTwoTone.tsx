import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidChartTwoTone = ({
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
      stroke={props.color}
      strokeWidth={1.5}
      d="M4.935 16.281h15.098M17.85 12.443H7.098M15.83 8.606H9.34"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.458 20.119c.705 0 1.057 0 1.286-.096.51-.214.814-.74.747-1.287-.031-.246-.206-.552-.556-1.162L13.976 5.446c-.354-.616-.53-.924-.729-1.075a1.234 1.234 0 0 0-1.495 0c-.198.15-.375.459-.728 1.075L4.065 17.574c-.35.61-.525.916-.556 1.162a1.23 1.23 0 0 0 .747 1.287c.229.096.58.096 1.285.096z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPyramidChartTwoTone;
