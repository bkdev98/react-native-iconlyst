import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartThreeLineBroken = ({
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
      d="M10.773 13.472a1.727 1.727 0 1 1 3.454 0v5.8a1.727 1.727 0 1 1-3.454 0v-2.9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.857 21a1.727 1.727 0 0 1-1.727-1.728v-3.31a1.728 1.728 0 1 1 3.454 0v3.31c0 .955-.773 1.727-1.727 1.727"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.87 14.268V9.262a1.727 1.727 0 0 0-3.454 0v10.01a1.726 1.726 0 1 0 3.454 0V17.77M4.13 10.57l5.818-4.158 2.182 2.3L19.124 3"
    />
  </Svg>
);
export default IconlystChartThreeLineBroken;
