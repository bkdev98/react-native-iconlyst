import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExposureCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18 5.37a.293.293 0 0 0-.016-.436A9.4 9.4 0 0 0 12 2.802c-5.238 0-9.5 4.262-9.5 9.5 0 2.14.71 4.174 2.011 5.837.108.137.31.147.436.025zM19.489 6.463a.292.292 0 0 0-.436-.025L6 19.232a.293.293 0 0 0 .016.436A9.4 9.4 0 0 0 12 21.8c5.238 0 9.5-4.261 9.5-9.5 0-2.14-.71-4.174-2.011-5.837" />
    </G>
    <Path
      fill={props.color}
      d="M7.95 8.64h-.98a.75.75 0 0 0 0 1.5h.98v.98a.75.75 0 0 0 1.5 0v-.98h.98a.75.75 0 0 0 0-1.5h-.98v-.98a.75.75 0 0 0-1.5 0zM13.064 16.232h3.459a.75.75 0 0 0 0-1.5h-3.46a.75.75 0 0 0 0 1.5"
    />
  </Svg>
);
export default IconlystExposureCircleBulk;