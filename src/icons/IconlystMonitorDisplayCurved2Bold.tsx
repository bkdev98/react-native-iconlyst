import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurved2Bold = ({
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
      d="M13.713 18.558a21 21 0 0 0-3.414-.006v-2.159q1.707-.045 3.414 0zm7.616-15.074a.5.5 0 0 0-.396-.119 66 66 0 0 1-17.866 0 .502.502 0 0 0-.567.495v12.617a.502.502 0 0 0 .567.496 66 66 0 0 1 5.732-.522v2.278c-.725.11-1.45.247-2.176.432a.75.75 0 0 0 .371 1.453c3.334-.849 6.661-.85 9.892 0a.751.751 0 0 0 .381-1.451 21 21 0 0 0-2.054-.422v-2.289c1.911.093 3.82.261 5.72.521a.499.499 0 0 0 .567-.496V3.86a.5.5 0 0 0-.171-.376"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurved2Bold;
