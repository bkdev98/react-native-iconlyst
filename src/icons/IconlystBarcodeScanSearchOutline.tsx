import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarcodeScanSearchOutline = ({
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
      d="M7.287 7.484a.75.75 0 0 1 .75.75v7.53a.75.75 0 1 1-1.5 0v-7.53a.75.75 0 0 1 .75-.75M13.89 7.484a.75.75 0 0 1 .75.75v3.026a.75.75 0 0 1-1.5 0V8.234a.75.75 0 0 1 .75-.75M17.191 7.484a.75.75 0 0 1 .75.75v1.793a.75.75 0 0 1-1.5 0V8.234a.75.75 0 0 1 .75-.75M10.588 11.328a.75.75 0 0 1 .75.75v3.594a.75.75 0 0 1-1.5 0v-3.594a.75.75 0 0 1 .75-.75M10.588 7.484a.75.75 0 0 1 .75.75v.948a.75.75 0 0 1-1.5 0v-.948a.75.75 0 0 1 .75-.75M15.947 4.25a.75.75 0 0 1 .75-.75h1.11a4.19 4.19 0 0 1 4.19 4.19v1.394a.75.75 0 0 1-1.5 0V7.69A2.69 2.69 0 0 0 17.808 5h-1.11a.75.75 0 0 1-.75-.75M6.69 5A2.69 2.69 0 0 0 4 7.69v1.394a.75.75 0 1 1-1.5 0V7.69A4.19 4.19 0 0 1 6.69 3.5H7.8a.75.75 0 0 1 0 1.5zM3.25 14.168a.75.75 0 0 1 .75.75v1.393a2.69 2.69 0 0 0 2.69 2.69h1.14a.75.75 0 0 1 0 1.5H6.69a4.19 4.19 0 0 1-4.19-4.19v-1.393a.75.75 0 0 1 .75-.75M17.64 13.688a2.299 2.299 0 1 0 0 4.597 2.299 2.299 0 0 0 0-4.597m-3.798 2.298a3.799 3.799 0 1 1 7.597 0 3.799 3.799 0 0 1-7.597 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.184 17.689a.75.75 0 0 1 1.06-.001l1.535 1.531a.75.75 0 0 1-1.06 1.062l-1.534-1.531a.75.75 0 0 1-.001-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarcodeScanSearchOutline;
