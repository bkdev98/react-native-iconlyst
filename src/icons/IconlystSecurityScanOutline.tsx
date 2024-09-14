import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSecurityScanOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.249 15.065a.75.75 0 0 1 .75.75v1.576a3.143 3.143 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5H7.142a4.643 4.643 0 0 1-4.643-4.642v-1.576a.75.75 0 0 1 .75-.75M21.25 15.065a.75.75 0 0 1 .75.75v1.576a4.643 4.643 0 0 1-4.644 4.642h-1.289a.75.75 0 1 1 0-1.5h1.29a3.143 3.143 0 0 0 3.142-3.142v-1.576a.75.75 0 0 1 .75-.75M7.142 4.033a3.14 3.14 0 0 0-3.143 3.142v1.577a.75.75 0 1 1-1.5 0V7.175a4.64 4.64 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM15.35 3.283a.75.75 0 0 1 .75-.75h1.258A4.64 4.64 0 0 1 22 7.175v1.577a.75.75 0 0 1-1.5 0V7.175a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M5.63 11.88a.75.75 0 0 1 .75-.75h11.743a.75.75 0 1 1 0 1.5H6.38a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.214 10.111a2.86 2.86 0 0 1 2.857-2.867h4.36a2.867 2.867 0 0 1 2.856 2.867v1.772a.75.75 0 1 1-1.5 0v-1.772c0-.756-.617-1.367-1.356-1.367h-4.36a1.36 1.36 0 0 0-1.357 1.367v1.772a.75.75 0 1 1-1.5 0zM7.964 13.709a.75.75 0 0 1 .75.75c0 .752.603 1.356 1.357 1.356h4.36c.744 0 1.356-.606 1.356-1.356a.75.75 0 0 1 1.5 0 2.86 2.86 0 0 1-2.856 2.856h-4.36a2.85 2.85 0 0 1-2.857-2.856.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSecurityScanOutline;
