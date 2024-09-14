import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinScanOutline = ({
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
      d="M13.092 12.752h-2.924a.75.75 0 0 1-.75-.75v-4.06a.75.75 0 0 1 .75-.75h2.836A2.85 2.85 0 0 1 15.858 9.7a2.78 2.78 0 0 1-2.766 3.05m-2.174-1.5h2.174a1.28 1.28 0 0 0 1.273-1.41 1.34 1.34 0 0 0-1.361-1.15h-2.086z"
    />
    <Path
      fill={props.color}
      d="M13.092 16.812h-2.924a.75.75 0 0 1-.75-.75v-4.06a.75.75 0 0 1 .75-.75h2.836a2.85 2.85 0 0 1 2.854 2.51 2.78 2.78 0 0 1-2.766 3.05m-2.174-1.5h2.174a1.28 1.28 0 0 0 1.273-1.408 1.34 1.34 0 0 0-1.361-1.152h-2.086z"
    />
    <Path
      fill={props.color}
      d="M12.281 18.01a.75.75 0 0 1-.75-.75v-1.2a.75.75 0 0 1 1.5 0v1.2a.75.75 0 0 1-.75.75m0-9.324a.75.75 0 0 1-.75-.75v-1.2a.75.75 0 0 1 1.5 0v1.2a.75.75 0 0 1-.75.75M17.352 21.748h-1.29a.75.75 0 1 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.142v-1.573a.75.75 0 1 1 1.5 0v1.577a4.65 4.65 0 0 1-4.642 4.638M8.4 21.748H7.143A4.65 4.65 0 0 1 2.5 17.106v-1.573a.75.75 0 1 1 1.5 0v1.577a3.146 3.146 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5zM3.25 9.217a.75.75 0 0 1-.75-.75V6.89a4.65 4.65 0 0 1 4.643-4.642h1.289a.75.75 0 1 1 0 1.5H7.143A3.146 3.146 0 0 0 4 6.89v1.577a.75.75 0 0 1-.75.75M21.252 9.217a.75.75 0 0 1-.75-.75V6.89a3.146 3.146 0 0 0-3.143-3.142h-1.257a.75.75 0 0 1 0-1.5h1.257a4.65 4.65 0 0 1 4.643 4.642v1.577a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinScanOutline;
