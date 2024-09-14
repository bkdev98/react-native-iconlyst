import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskTwoTone = ({
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
      d="M15.314 3.004v3.712a7.35 7.35 0 0 1 4.94 6.94A7.346 7.346 0 0 1 12.91 21a7.346 7.346 0 0 1-7.345-7.345 7.35 7.35 0 0 1 4.94-6.94V3.004M9.29 3h7.346"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.646 14.365c1.521.885 3.968 1.217 7.728-.677 3.083-1.535 5.281-1.59 6.803-1.078"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChemistryFlaskTwoTone;
