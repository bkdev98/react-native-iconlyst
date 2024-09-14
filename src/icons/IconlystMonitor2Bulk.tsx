import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitor2Bulk = ({
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
      fill={props.color}
      d="M7.028 2.658h9.943a4.535 4.535 0 0 1 4.529 4.53v5.456a4.535 4.535 0 0 1-4.529 4.53H7.028a4.534 4.534 0 0 1-4.528-4.53V7.188a4.534 4.534 0 0 1 4.528-4.53"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m9.042 17.173-.434 2.668H7.055a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668h-3.743l.433-2.668z"
    />
  </Svg>
);
export default IconlystMonitor2Bulk;
