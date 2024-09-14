import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultiChartOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.794 6.766a.807.807 0 1 0 0-1.615.807.807 0 0 0 0 1.615m2.308-.808a2.307 2.307 0 1 1-4.615 0 2.307 2.307 0 0 1 4.615 0M7.989 13.439a3.266 3.266 0 1 0 0 6.531 3.266 3.266 0 0 0 0-6.531m-4.766 3.265a4.766 4.766 0 1 1 9.532 0 4.766 4.766 0 0 1-9.532 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.85 11.94a.75.75 0 0 1 .75.75v3.402h3.402a.75.75 0 0 1 0 1.5H8.297c-.661 0-1.197-.536-1.197-1.197V12.69a.75.75 0 0 1 .75-.75M13.481 2.486a.75.75 0 0 1 .75.75v7.157c0 .061.05.111.112.111H21.5a.75.75 0 0 1 0 1.5h-7.157c-.89 0-1.612-.721-1.612-1.611V3.236a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.811 4.354a.75.75 0 0 1 .1 1.056l-2.05 2.478a.75.75 0 0 1-1.16-.006l-.953-1.175-1.445 1.785a.75.75 0 1 1-1.166-.944l2.029-2.505a.75.75 0 0 1 1.165 0l.958 1.183 1.466-1.772a.75.75 0 0 1 1.056-.1M15.235 18.331a.75.75 0 0 1 .75.75v1.92a.75.75 0 0 1-1.5 0v-1.92a.75.75 0 0 1 .75-.75M18.367 14.016a.75.75 0 0 1 .75.75v6.236a.75.75 0 1 1-1.5 0v-6.236a.75.75 0 0 1 .75-.75M21.5 16.585a.75.75 0 0 1 .75.75v3.667a.75.75 0 0 1-1.5 0v-3.667a.75.75 0 0 1 .75-.75M3.5 6.953a.75.75 0 0 1 .75.75v.009a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M5.922 8.995a.75.75 0 0 1 .75.75v.01a.75.75 0 1 1-1.5 0v-.01a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMultiChartOutline;
