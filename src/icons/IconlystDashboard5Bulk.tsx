import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard5Bulk = ({
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
      fill={props.color}
      d="M3.48 12c0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5-9.5 4.262-9.5 9.5"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.98 5.71a.75.75 0 0 1-.75-.75V2.53a9.6 9.6 0 0 1 1.5 0v2.43a.75.75 0 0 1-.75.75M22.451 11.25h-2.19a.75.75 0 1 0 0 1.5h2.19a9.6 9.6 0 0 0 0-1.5M13.73 21.47v-2.19a.75.75 0 0 0-1.5 0v2.19a9.6 9.6 0 0 0 1.5 0M3.51 12.75H5.94a.75.75 0 0 0 0-1.5H3.51a9.6 9.6 0 0 0 0 1.5M12.981 15.387c-1.04 0-1.652-.49-1.982-.902-.579-.723-.696-1.683-.555-2.313.228-1.02 1.203-2.472 2.221-3.304l.316-.258.316.258c1.017.832 1.992 2.283 2.22 3.304.141.63.024 1.59-.555 2.313-.33.411-.94.902-1.98.902"
    />
  </Svg>
);
export default IconlystDashboard5Bulk;
