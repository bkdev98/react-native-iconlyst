import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerprintScanOutline = ({
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
      d="M12.25 8.229a2.65 2.65 0 0 0-2.65 2.65v2.807a2.651 2.651 0 0 0 4.081 2.233.75.75 0 1 1 .807 1.265A4.151 4.151 0 0 1 8.1 13.686v-2.807a4.15 4.15 0 0 1 8.3 0v2.807a.75.75 0 1 1-1.5 0v-2.807a2.65 2.65 0 0 0-2.65-2.65"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.249 10.342a.75.75 0 0 1 .75.75v2.537a.75.75 0 0 1-1.5 0v-2.537a.75.75 0 0 1 .75-.75M3.249 15.065a.75.75 0 0 1 .75.75v1.577a3.143 3.143 0 0 0 3.143 3.141h1.257a.75.75 0 0 1 0 1.5H7.142a4.643 4.643 0 0 1-4.643-4.642v-1.576a.75.75 0 0 1 .75-.75M21.25 15.065a.75.75 0 0 1 .75.75v1.577a4.643 4.643 0 0 1-4.644 4.641h-1.289a.75.75 0 1 1 0-1.5h1.29a3.143 3.143 0 0 0 3.142-3.142v-1.576a.75.75 0 0 1 .75-.75M7.142 4.033a3.14 3.14 0 0 0-3.143 3.142v1.577a.75.75 0 1 1-1.5 0V7.175a4.64 4.64 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM15.35 3.283a.75.75 0 0 1 .75-.75h1.258A4.64 4.64 0 0 1 22 7.175v1.577a.75.75 0 1 1-1.5 0V7.175a3.14 3.14 0 0 0-3.142-3.142H16.1a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFingerprintScanOutline;
