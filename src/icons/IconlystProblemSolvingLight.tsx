import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProblemSolvingLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Circle
      cx={5.496}
      cy={18.56}
      r={1.94}
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
      d="M17.758 3.695a.39.39 0 0 1 .677 0l1.956 3.39a.39.39 0 0 1-.338.585H16.14a.39.39 0 0 1-.338-.586zM4.93 3.92 8.54 7.532m0-3.612L4.93 7.532M14.652 16.025l3.613 3.613m0-3.613-3.613 3.613M5.497 16.559v-2.024a2.93 2.93 0 0 1 2.93-2.93h6.568a2.93 2.93 0 0 0 2.93-2.93v-.87"
    />
  </Svg>
);
export default IconlystProblemSolvingLight;
