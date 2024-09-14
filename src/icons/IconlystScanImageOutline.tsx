import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanImageOutline = ({
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
      d="M15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.893V8.47a.75.75 0 1 1-1.5 0V6.893a3.14 3.14 0 0 0-3.143-3.143H16.1a.75.75 0 0 1-.75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.893V8.47a.75.75 0 0 1-1.5 0V6.893A4.64 4.64 0 0 1 7.143 2.25h1.29a.75.75 0 0 1 0 1.5zM3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M21.25 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 0 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M10.397 9.22l-.003.005v.001l-2.885 4.682-.003.005v.001q0 .002.003.008l.005.007h9.470999999999998l.006-.007.003-.007-.002-.004-.002-.002-1.715-2.805-.003-.005-.009-.002h-.007l-.004.004-.648.76c-.64.748-1.813.699-2.386-.105l-1.802-2.531-.004-.005-.008-.001h-.005zm1.2409999999999997-.8650000000000002a1.513 1.513 0 0 0-2.523.085v.001l-2.883 4.68a1.514 1.514 0 0 0 1.29 2.308h9.456c1.181 0 1.91-1.293 1.292-2.304h-.001l-1.715-2.805a1.515 1.515 0 0 0-2.445-.19l-.646.756-.004.004-.008.002-.007-.002-.002-.001-.002-.003m0 0-1.802-2.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanImageOutline;
