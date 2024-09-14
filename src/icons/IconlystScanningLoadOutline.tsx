import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanningLoadOutline = ({
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
      d="M21.25 15.065a.75.75 0 0 1 .75.75v1.576a4.643 4.643 0 0 1-4.644 4.642h-1.289a.75.75 0 1 1 0-1.5h1.29a3.143 3.143 0 0 0 3.142-3.142v-1.576a.75.75 0 0 1 .75-.75M3.249 15.065a.75.75 0 0 1 .75.75v1.576a3.143 3.143 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5H7.142a4.643 4.643 0 0 1-4.643-4.642v-1.576a.75.75 0 0 1 .75-.75M7.142 4.033a3.14 3.14 0 0 0-3.143 3.142v1.577a.75.75 0 1 1-1.5 0V7.175a4.64 4.64 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5zM15.35 3.283a.75.75 0 0 1 .75-.75h1.258A4.64 4.64 0 0 1 22 7.175v1.577a.75.75 0 0 1-1.5 0V7.175a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M8.462 11.533a.75.75 0 0 1 .75.75 3.038 3.038 0 0 0 5.046 2.28.75.75 0 0 1 .994 1.123 4.538 4.538 0 0 1-7.54-3.403.75.75 0 0 1 .75-.75M12.25 9.244c-.771 0-1.475.286-2.01.76a.75.75 0 0 1-.993-1.125 4.538 4.538 0 0 1 7.54 3.403.75.75 0 0 1-1.5 0 3.04 3.04 0 0 0-3.038-3.038"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanningLoadOutline;
