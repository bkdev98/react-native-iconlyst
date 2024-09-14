import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRemove2Bulk = ({
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
      d="M13.764 4.05a5.973 5.973 0 0 0 6.86 5.904.312.312 0 0 1 .36.303v2.854c0 2.5-2.03 4.53-4.53 4.53h-9.94c-2.5 0-4.53-2.03-4.53-4.53V7.66c0-2.5 2.03-4.53 4.53-4.53h6.964c.19 0 .332.173.312.362a6 6 0 0 0-.026.558"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.266 7.544a.74.74 0 0 1-.53-.22l-1.398-1.397-1.397 1.397a.749.749 0 1 1-1.06-1.06l1.397-1.397L16.88 3.47a.749.749 0 1 1 1.06-1.06l1.397 1.397 1.398-1.397a.749.749 0 1 1 1.06 1.06l-1.397 1.398 1.397 1.397a.749.749 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m8.527 17.643-.434 2.668H6.54a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668H9.613l.433-2.668z"
    />
  </Svg>
);
export default IconlystMonitorDisplayRemove2Bulk;
