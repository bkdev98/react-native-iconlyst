import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarChartsTwoTone = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.694 4.541h7.62c2.652 0 4.294 1.472 4.286 4.179v8.213c0 2.707-1.642 4.188-4.293 4.188H8.694c-2.643 0-4.294-1.508-4.294-4.256V8.72c0-2.707 1.65-4.179 4.294-4.179"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.14 3.12v2.576M8.87 3.119v2.577M16.464 16.73v-2.094M11.235 16.73v-2.86M13.85 16.73v-.774M8.545 16.73v-.774M8.198 12.767l2.758-2.989 3.147 2.06 2.7-2.905"
    />
  </Svg>
);
export default IconlystCalendarChartsTwoTone;
