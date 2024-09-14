import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneOutline = ({
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
      d="M17.595 18.924a2.09 2.09 0 0 1-1.621-.769 2.13 2.13 0 0 1-.431-1.866l.907-3.8a2.13 2.13 0 0 1 1.242-1.472 2.1 2.1 0 0 1 1.9.112 4.174 4.174 0 0 1 1.95 4.7 4.13 4.13 0 0 1-3.851 3.084c-.035.011-.066.011-.096.011m.938-6.576a.66.66 0 0 0-.49.23.64.64 0 0 0-.134.265l-.907 3.8a.65.65 0 0 0 .349.733.6.6 0 0 0 .27.053 2.656 2.656 0 0 0 2.463-1.96 2.694 2.694 0 0 0-1.248-3.033.6.6 0 0 0-.303-.088"
    />
    <Path
      fill={props.color}
      d="M13.288 21.59q-.363-.001-.732-.012c-.246-.006-.522-.014-.8-.014a.75.75 0 1 1 0-1.5q.432.002.835.014c1.868.05 2.9.075 4.145-2.255a.749.749 0 0 1 1.417.424.8.8 0 0 1-.095.283c-1.47 2.753-3.075 3.06-4.77 3.06M6.901 18.926H6.81a4.173 4.173 0 0 1-1.9-7.788 2.1 2.1 0 0 1 1.9-.11 2.13 2.13 0 0 1 1.24 1.47l.91 3.8a2.13 2.13 0 0 1-1.16 2.43c-.28.132-.587.2-.898.198M5.66 12.433a2.694 2.694 0 0 0-1.249 3.033 2.65 2.65 0 0 0 2.463 1.96.628.628 0 0 0 .621-.785l-.909-3.8a.635.635 0 0 0-.653-.491.6.6 0 0 0-.273.083"
    />
    <Path
      fill={props.color}
      d="M19.599 12.794a.747.747 0 0 1-.75-.75v-1.855a6.603 6.603 0 0 0-13.206 0v1.852a.75.75 0 0 1-1.5 0v-1.852a8.103 8.103 0 0 1 16.206 0v1.852a.75.75 0 0 1-.75.753"
    />
  </Svg>
);
export default IconlystHeadphoneOutline;
