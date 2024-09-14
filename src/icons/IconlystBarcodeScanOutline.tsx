import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanOutline = ({
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
      d="M7.287 7.484a.75.75 0 0 1 .75.75v7.53a.75.75 0 0 1-1.5 0v-7.53a.75.75 0 0 1 .75-.75M13.89 7.484a.75.75 0 0 1 .75.75v7.53a.75.75 0 0 1-1.5 0v-7.53a.75.75 0 0 1 .75-.75M17.193 7.484a.75.75 0 0 1 .75.75v3.594a.75.75 0 0 1-1.5 0V8.234a.75.75 0 0 1 .75-.75M17.193 13.977a.75.75 0 0 1 .75.75v.947a.75.75 0 0 1-1.5 0v-.947a.75.75 0 0 1 .75-.75M10.588 11.328a.75.75 0 0 1 .75.75v3.594a.75.75 0 0 1-1.5 0v-3.594a.75.75 0 0 1 .75-.75M10.588 7.484a.75.75 0 0 1 .75.75v.948a.75.75 0 0 1-1.5 0v-.948a.75.75 0 0 1 .75-.75M15.95 4.25a.75.75 0 0 1 .75-.75h1.11A4.19 4.19 0 0 1 22 7.69v1.393a.75.75 0 0 1-1.5 0V7.69A2.69 2.69 0 0 0 17.81 5H16.7a.75.75 0 0 1-.75-.75M21.25 14.168a.75.75 0 0 1 .75.75v1.393a4.19 4.19 0 0 1-4.19 4.19h-1.14a.75.75 0 0 1 0-1.5h1.14a2.69 2.69 0 0 0 2.69-2.69v-1.393a.75.75 0 0 1 .75-.75M6.69 5A2.69 2.69 0 0 0 4 7.69v1.393a.75.75 0 0 1-1.5 0V7.69A4.19 4.19 0 0 1 6.69 3.5H7.8a.75.75 0 1 1 0 1.5zM3.25 14.168a.75.75 0 0 1 .75.75v1.393a2.69 2.69 0 0 0 2.69 2.69h1.14a.75.75 0 0 1 0 1.5H6.69a4.19 4.19 0 0 1-4.19-4.19v-1.393a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarcodeScanOutline;
