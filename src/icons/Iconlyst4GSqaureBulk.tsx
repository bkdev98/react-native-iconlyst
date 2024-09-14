import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GSqaureBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.031v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.519 15.43c1.428 0 2.281-.732 2.281-1.96V12a.75.75 0 0 0-.75-.75h-1.531a.75.75 0 0 0 0 1.5h.781v.72c0 .216 0 .46-.781.46-.477 0-.894-.172-1.206-.498-.362-.376-.555-.938-.529-1.54a1.98 1.98 0 0 1 .641-1.374c.34-.31.757-.473 1.191-.448q.395.02.757.201a.75.75 0 0 0 .671-1.342 3.4 3.4 0 0 0-1.352-.357c-.823-.049-1.64.256-2.278.837a3.5 3.5 0 0 0-1.129 2.42c-.043 1.024.293 1.962.945 2.642a3.14 3.14 0 0 0 2.289.96m-4.838-1.22h.287a.75.75 0 0 0 0-1.5h-.287V9.311a.75.75 0 0 0-1.359-.438l-2.981 4.15a.747.747 0 0 0 .608 1.187h2.232v.48a.75.75 0 0 0 1.5 0zm-1.5-2.57v1.07h-.77z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4GSqaureBulk;
