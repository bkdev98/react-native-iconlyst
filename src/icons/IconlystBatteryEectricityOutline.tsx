import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryEectricityOutline = ({
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
      d="M18.65 4.806a.15.15 0 0 0-.15.15v1.8a.75.75 0 0 1-1.5 0v-1.8c0-.911.739-1.65 1.65-1.65h.8c.911 0 1.65.739 1.65 1.65v1.996a.75.75 0 0 1-1.5 0V4.956a.15.15 0 0 0-.15-.15zM6.053 4.806a.15.15 0 0 1 .15.15v1.8a.75.75 0 1 0 1.5 0v-1.8a1.65 1.65 0 0 0-1.65-1.65h-.8a1.65 1.65 0 0 0-1.65 1.65v1.996a.75.75 0 1 0 1.5 0V4.956a.15.15 0 0 1 .15-.15z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.209 5.706c-.366 0-.714.16-.951.439l-.339.396a2.75 2.75 0 0 1-2.091.965H5.25c-.69 0-1.25.56-1.25 1.25v7.7a2.74 2.74 0 0 0 2.738 2.738h11.024a2.74 2.74 0 0 0 2.738-2.738v-7.7c0-.69-.56-1.25-1.25-1.25h-1.578a2.75 2.75 0 0 1-2.091-.965l-.339-.396a1.25 1.25 0 0 0-.95-.439zm-2.092-.535a2.75 2.75 0 0 1 2.092-.965h4.082c.805 0 1.57.353 2.092.965l.339.397c.237.278.585.438.95.438h1.578A2.75 2.75 0 0 1 22 8.756v7.7a4.24 4.24 0 0 1-4.238 4.238H6.738A4.24 4.24 0 0 1 2.5 16.456v-7.7a2.75 2.75 0 0 1 2.75-2.75h1.578c.365 0 .713-.16.95-.438z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.963 12.917a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M13.963 12.917a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.213 10.667a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryEectricityOutline;
