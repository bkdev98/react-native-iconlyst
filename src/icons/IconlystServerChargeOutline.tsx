import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerChargeOutline = ({
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
      fillRule="evenodd"
      d="M4.14 3.691c1.019-.949 2.425-1.441 4-1.441h7.667c1.577 0 2.983.495 4.002 1.445 1.025.955 1.598 2.315 1.598 3.919v2.505a.75.75 0 0 1-1.5 0V7.614c0-1.232-.431-2.18-1.12-2.822-.696-.648-1.715-1.042-2.98-1.042H8.14c-1.266 0-2.284.392-2.979 1.04-.689.64-1.12 1.587-1.12 2.824v8.136c0 1.238.431 2.185 1.12 2.826.695.647 1.713 1.04 2.98 1.04h2.483a.75.75 0 0 1 0 1.5H8.14c-1.575 0-2.982-.493-4.001-1.442-1.026-.955-1.598-2.316-1.598-3.924V7.614c0-1.608.573-2.968 1.598-3.923"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.945 13.223a3.513 3.513 0 1 0 0 7.027 3.513 3.513 0 0 0 0-7.027m-5.013 3.513a5.013 5.013 0 1 1 10.027 0 5.013 5.013 0 0 1-10.027 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.068 14.46a.75.75 0 0 1 .301 1.017l-.31.57h1.035a.75.75 0 0 1 .659 1.109l-.848 1.555a.75.75 0 1 1-1.317-.718l.243-.446H15.8a.75.75 0 0 1-.66-1.108l.912-1.678a.75.75 0 0 1 1.017-.3M2.563 11.682a.75.75 0 0 1 .75-.75h6.995a.75.75 0 0 1 0 1.5H3.313a.75.75 0 0 1-.75-.75M6.752 15.67a.75.75 0 0 1 .75-.75h.504a.75.75 0 0 1 0 1.5h-.504a.75.75 0 0 1-.75-.75M6.752 7.692a.75.75 0 0 1 .75-.75h.504a.75.75 0 0 1 0 1.5h-.504a.75.75 0 0 1-.75-.75m4.571 0a.75.75 0 0 1 .75-.75h4.375a.75.75 0 0 1 0 1.5h-4.375a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerChargeOutline;
