import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownChartBroken = ({
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
      d="M21.469 4.802A1.802 1.802 0 1 1 19.667 3M16.467 14.719l-2.805-3.645-3.2 2.512-2.745-3.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.914 3.79H8.102C5.28 3.79 3.53 5.788 3.53 8.61v7.576c0 2.823 1.716 4.813 4.573 4.813h.471M20.737 9.59v6.597c0 2.822-1.752 4.813-4.574 4.813h-4.03"
    />
  </Svg>
);
export default IconlystDownChartBroken;
