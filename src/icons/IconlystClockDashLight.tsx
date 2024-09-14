import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDashLight = ({
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
      d="m14.961 14.607-2.912-2.152v-4.01M5.647 6.094q-.534.633-.942 1.341M4.835 16.394a8.5 8.5 0 0 1-.784-1.646M10.58 20.436h.009a8.3 8.3 0 0 0 1.964.175M9.413 3.508c-.576.2-1.131.463-1.647.784M16.937 19.325a8.8 8.8 0 0 1-1.647.783M12.148 3.004a8.2 8.2 0 0 1 1.965.177 8.4 8.4 0 0 1 2.602.982c.483.27.937.582 1.352.94a8.6 8.6 0 0 1 1.8 2.11q.483.775.785 1.656a8.605 8.605 0 0 1 .502 2.734 8 8 0 0 1-.178 1.956l.002.01a8.4 8.4 0 0 1-.985 2.593 7.7 7.7 0 0 1-.94 1.351M7.984 19.442a8 8 0 0 1-1.34-.932M3.724 10.037a8.2 8.2 0 0 0-.175 1.974"
    />
  </Svg>
);
export default IconlystClockDashLight;
