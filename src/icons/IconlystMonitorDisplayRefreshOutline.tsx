import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRefreshOutline = ({
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
      d="M2.5 7.314c0-2.639 2.14-4.779 4.778-4.779h9.943A4.78 4.78 0 0 1 22 7.315v5.456a4.78 4.78 0 0 1-4.78 4.779H7.279A4.78 4.78 0 0 1 2.5 12.77zm4.778-3.279A3.28 3.28 0 0 0 4 7.315v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.315a3.28 3.28 0 0 0-3.28-3.279zM6.555 20.715a.75.75 0 0 1 .75-.75h9.888a.75.75 0 0 1 0 1.5H7.305a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.254 16.059a.75.75 0 0 1 .62.86l-.638 3.918a.75.75 0 0 1-1.48-.241l.637-3.918a.75.75 0 0 1 .86-.62M14.245 16.059a.75.75 0 0 1 .86.62l.638 3.917a.75.75 0 0 1-1.48.24l-.638-3.917a.75.75 0 0 1 .62-.86M10.134 10.89v-.001l-.001-.001m-.639.393-.64.391a.75.75 0 0 1 1.279-.784l.003.005.023.035q.035.05.107.146c.098.125.242.293.425.459.377.34.854.615 1.397.615.8 0 1.499-.433 1.873-1.08a.75.75 0 0 1 1.299.75 3.66 3.66 0 0 1-3.172 1.83c-1.063 0-1.883-.534-2.402-1.002a5 5 0 0 1-.81-.94l-.014-.021-.005-.008-.001-.002-.001-.002zM12.09 7.824a2.15 2.15 0 0 0-1.88 1.085.75.75 0 0 1-1.303-.743 3.65 3.65 0 0 1 3.182-1.842c1.196 0 2.09.5 2.669.982a4.7 4.7 0 0 1 .822.89l.047.072.014.023.005.008.002.003v.001l.001.001-.643.386.644-.385a.75.75 0 0 1-1.284.775l-.003-.004-.02-.031a3.145 3.145 0 0 0-.544-.586 2.63 2.63 0 0 0-1.71-.635"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.006 6.135a.75.75 0 0 1 .75.75v1.794a.75.75 0 0 1-.75.75h-1.795a.75.75 0 0 1 0-1.5h1.045V6.885a.75.75 0 0 1 .75-.75M8.744 11.273a.75.75 0 0 1 .75-.75h1.795a.75.75 0 0 1 0 1.5h-1.045v.92a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRefreshOutline;
