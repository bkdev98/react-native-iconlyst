import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyRepairCircleLight = ({
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
    <Circle
      cx={12.25}
      cy={12.5}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.032 21.21v-4.846a4.54 4.54 0 0 0 2.751-4.17 4.52 4.52 0 0 0-2.764-4.17v3.195a.87.87 0 0 1-.383.718l-.903.604a.86.86 0 0 1-.96.001l-.908-.606a.86.86 0 0 1-.384-.718V8.024a4.53 4.53 0 0 0-2.764 4.17 4.53 4.53 0 0 0 2.758 4.17v4.846"
    />
  </Svg>
);
export default IconlystKeyRepairCircleLight;
