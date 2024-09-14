import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCloseOutline = ({
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
      d="M4.915 4.8a.75.75 0 0 1 .276 1.023 3.1 3.1 0 0 0-.416 1.55v5.22a3.106 3.106 0 0 0 3.106 3.106h7.66a.75.75 0 1 1 0 1.5H7.88a4.606 4.606 0 0 1-4.606-4.606v-5.22c0-.842.228-1.623.616-2.298A.75.75 0 0 1 4.915 4.8M7.375 20.193a.75.75 0 0 1 .75-.75h8.99a.75.75 0 1 1 0 1.5h-8.99a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.735 15.705a.75.75 0 0 1 .62.86l-.61 3.749a.75.75 0 0 1-1.481-.241l.61-3.748a.75.75 0 0 1 .86-.62M14.237 15.705a.75.75 0 0 1 .86.62l.61 3.748a.75.75 0 1 1-1.48.24l-.61-3.747a.75.75 0 0 1 .62-.86"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 3.63a.75.75 0 0 1 1.06 0l16.324 16.323a.75.75 0 0 1-1.06 1.061L2.72 4.69a.75.75 0 0 1 0-1.06M7.2 3.518a.75.75 0 0 1 .75-.75h9.444A4.605 4.605 0 0 1 22 7.372v5.221c0 1.386-.618 2.631-1.594 3.465a.75.75 0 0 1-.974-1.142 3.04 3.04 0 0 0 1.068-2.323v-5.22a3.105 3.105 0 0 0-3.106-3.105H7.949a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCloseOutline;
