import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurved2Bulk = ({
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
      d="M8.799 18.73v-2.278l1.5-.058v2.159a21 21 0 0 1 3.414.006v-2.165l1.5.059v2.289a21 21 0 0 1 2.054.42.751.751 0 0 1-.19 1.477.7.7 0 0 1-.191-.025c-3.231-.85-6.558-.848-9.892 0a.75.75 0 0 1-.371-1.453 22 22 0 0 1 2.176-.431"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.329 3.484a.51.51 0 0 0-.396-.119 65.8 65.8 0 0 1-17.866 0 .499.499 0 0 0-.567.496v12.617a.502.502 0 0 0 .567.495 65.9 65.9 0 0 1 17.866 0 .5.5 0 0 0 .396-.118.5.5 0 0 0 .171-.377V3.861a.5.5 0 0 0-.171-.377"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMonitorDisplayCurved2Bulk;
