import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHeartrate2TwoTone = ({
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
      d="M19.145 7.238a8.37 8.37 0 0 0-7.265-4.196 8.38 8.38 0 0 0 0 16.761 8.32 8.32 0 0 0 5.705-2.247l3.411 3.402"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.018 11.996 1.887-3.346 2.755 5.71 2.798-4.053 1.978 3.015 1.267-1.999H21.5"
    />
  </Svg>
);
export default IconlystSearchHeartrate2TwoTone;
