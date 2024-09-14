import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalTwoTone = ({
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
      d="M17.383 20.07V5.771A1.84 1.84 0 0 0 15.54 3.93H7.004a1.84 1.84 0 0 0-1.842 1.842v14.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.441 17.021.002.052m-.002-3.182.002.051m-4.433 3.08.002.051m-.002-3.182.002.051"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.97 20.07h18M20.483 20.07V9.29c0-.766-.622-1.388-1.389-1.388h-1.711"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.274 8.68v1.554m0-1.555V7.125m0 1.554h1.555m-3.111 0h1.555"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBuildingHospitalTwoTone;
