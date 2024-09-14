import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhoneOutline = ({
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
      d="M2.5 6.45a3.96 3.96 0 0 1 3.958-3.959h4.591a3.96 3.96 0 0 1 3.958 3.958l.001 11.14a3.96 3.96 0 0 1-3.958 3.958H6.46A3.96 3.96 0 0 1 2.5 17.589zm1.5 0 .001 11.139c0 1.357 1.1 2.458 2.458 2.458h4.591c1.358 0 2.458-1.1 2.458-2.458V6.449c0-1.357-1.101-2.458-2.459-2.458H6.458A2.46 2.46 0 0 0 4 6.451M16.034 2.974a.75.75 0 0 1 .944-.485 4.34 4.34 0 0 1 2.98 4.597.75.75 0 0 1-1.047.605l-1.407-.619a.75.75 0 0 1 .604-1.373l.26.115a2.84 2.84 0 0 0-1.85-1.897.75.75 0 0 1-.484-.943"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.043 8.953a3.96 3.96 0 0 1 3.958 3.958v4.676a3.96 3.96 0 0 1-3.957 3.958l-3.159.001a.75.75 0 0 1 0-1.5l3.159-.001c1.356 0 2.457-1.1 2.457-2.458v-4.676c0-1.357-1.1-2.458-2.458-2.458l-1.862.001a.75.75 0 1 1 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.98 13.373a.75.75 0 0 1 .75.75v2.253a.75.75 0 1 1-1.5 0v-2.253a.75.75 0 0 1 .75-.75M6.92 6.512a.75.75 0 0 1 .75-.75h2.17a.75.75 0 1 1 0 1.5H7.67a.75.75 0 0 1-.75-.75M7.754 17.496a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRotatePhoneOutline;
