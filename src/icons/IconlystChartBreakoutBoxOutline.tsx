import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartBreakoutBoxOutline = ({
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
      d="M15.337 2.37a.75.75 0 0 1 .75.75v1.42a.75.75 0 0 1-1.5 0V3.12a.75.75 0 0 1 .75-.75m5.268 1.64a.75.75 0 0 1 0 1.06L19.6 6.076a.75.75 0 1 1-1.06-1.06l1.004-1.005a.75.75 0 0 1 1.06 0m-1.271 5.267a.75.75 0 0 1 .75-.75h1.421a.75.75 0 0 1 0 1.5h-1.421a.75.75 0 0 1-.75-.75M5.343 5.872C4.67 6.497 4.25 7.42 4.25 8.629v7.97c0 1.209.421 2.132 1.092 2.756.678.63 1.672 1.014 2.908 1.014h7.512c1.235 0 2.23-.385 2.907-1.016.672-.627 1.093-1.55 1.093-2.753v-2.972a.75.75 0 1 1 1.5 0V16.6c0 1.574-.563 2.91-1.57 3.85-1.002.934-2.383 1.42-3.93 1.42H8.25c-1.546 0-2.928-.484-3.93-1.417-1.008-.938-1.57-2.275-1.57-3.853V8.629c0-1.579.562-2.916 1.57-3.855 1.002-.933 2.384-1.417 3.93-1.417h2.512a.75.75 0 0 1 0 1.5H8.25c-1.236 0-2.23.384-2.907 1.015"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.272 8.804a.75.75 0 0 1 .75-.75h3.789a.75.75 0 0 1 .75.75v3.79a.75.75 0 0 1-1.5 0v-3.04h-3.04a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.884 8.192a.75.75 0 0 1 .179 1.045A13.05 13.05 0 0 1 5.39 14.764a13 13 0 0 1-2.01-.153.75.75 0 0 1 .23-1.483q.87.136 1.78.136a11.55 11.55 0 0 0 9.449-4.893.75.75 0 0 1 1.045-.18"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChartBreakoutBoxOutline;
