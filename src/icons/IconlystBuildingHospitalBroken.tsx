import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalBroken = ({
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
      d="M17.133 17.075V5.772A1.84 1.84 0 0 0 15.29 3.93H6.754a1.84 1.84 0 0 0-1.842 1.842v3.574M13.191 17.021l.002.052m-.002-3.182.002.051m-4.433 3.08.002.051m-.002-3.182.002.051M4.912 12.922v7.149M3.72 20.07h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.233 20.07V9.29c0-.766-.622-1.388-1.388-1.388h-1.712M11.024 8.68v1.554m0-1.555V7.125m0 1.554h1.555m-3.112 0h1.555"
    />
  </Svg>
);
export default IconlystBuildingHospitalBroken;
