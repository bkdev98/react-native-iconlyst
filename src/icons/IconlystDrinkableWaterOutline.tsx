import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrinkableWaterOutline = ({
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
      d="M12.614 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.17 6.16.444.603.446-.603a.75.75 0 0 0-.89 0m-4.305 7.272c-.03-2.102 1.106-3.939 2.15-5.192a14.4 14.4 0 0 1 1.955-1.926l.142-.111.04-.03.012-.01.003-.002h.001s.001-.001.447.602c.445-.603.444-.604.445-.603l.002.001.004.003.011.009.04.03q.052.039.141.111a14.41 14.41 0 0 1 1.954 1.925c1.046 1.254 2.18 3.092 2.151 5.193.023 1.302-.605 2.45-1.485 3.253-.877.8-2.063 1.314-3.264 1.301-1.2.012-2.386-.5-3.263-1.3-.881-.804-1.51-1.952-1.486-3.254m4.75-5.702.134.119c.36.32.837.782 1.311 1.351.968 1.16 1.83 2.653 1.803 4.222v.031c.016.788-.364 1.548-.996 2.124-.635.58-1.467.919-2.243.91h-.019c-.777.009-1.608-.33-2.244-.91-.632-.577-1.012-1.336-.997-2.123v-.032c-.025-1.569.837-3.062 1.804-4.222a13 13 0 0 1 1.446-1.47"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.503 13.456a.75.75 0 0 1 1.498.038v.002q0 .041-.003.082c-.108 1.21-1.117 1.936-2.165 1.992a.75.75 0 0 1-.08-1.498c.448-.024.716-.295.75-.616"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrinkableWaterOutline;
