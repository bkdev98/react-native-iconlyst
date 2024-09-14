import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLastFmSquareLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.046 14.19c-.657.598-1.553.735-2.115.735-1.47 0-2.431-1.265-2.431-2.908S7.576 9.02 9.047 9.02c.735 0 1.517.354 1.999.892 1.387 1.55 1.64 4.773 3.946 5.14 1.065.17 2.508-.096 2.508-1.62 0-1.649-1.776-1.306-2.816-1.783-.776-.357-.956-1.394-.474-2.069.777-1.085 3.037-.863 3.29.689"
    />
  </Svg>
);
export default IconlystLastFmSquareLight;
