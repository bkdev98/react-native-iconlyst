import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartVerticalAltTwoTone = ({
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.127 17.762v-4.881a1.22 1.22 0 0 0-2.44 0v4.881a1.22 1.22 0 1 0 2.44 0Z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.94 17.762V8.78a1.22 1.22 0 1 0-2.44 0v8.983a1.22 1.22 0 1 0 2.44 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.06 17.762v-8.39a1.22 1.22 0 1 1 2.44 0v8.39a1.22 1.22 0 1 1-2.44 0Z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.873 17.762V6.474a1.22 1.22 0 1 1 2.44 0v11.288a1.22 1.22 0 1 1-2.44 0Z"
    />
  </Svg>
);
export default IconlystBarChartVerticalAltTwoTone;
