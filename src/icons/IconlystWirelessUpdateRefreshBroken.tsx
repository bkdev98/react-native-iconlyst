import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessUpdateRefreshBroken = ({
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
      d="m19.505 4.207-2.703.054.053 2.687M19.793 16.594a8.94 8.94 0 0 1-7.084 4.371"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.813 4.43a8.95 8.95 0 0 1 4.205 8.284M4.822 19.99l2.7-.135-.134-2.685"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.506 19.687a8.95 8.95 0 0 1-4.431-8.502M4.16 7.619a8.94 8.94 0 0 1 6.948-4.584M8.047 10.463a6.4 6.4 0 0 1 7.993 0M10.012 12.936a3.156 3.156 0 0 1 4.07-.006"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12.043 15.342v.043"
    />
  </Svg>
);
export default IconlystWirelessUpdateRefreshBroken;
