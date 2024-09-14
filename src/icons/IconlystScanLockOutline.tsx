import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLockOutline = ({
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
      d="M17.358 22.71H16.07a.75.75 0 0 1 0-1.5h1.29a3.146 3.146 0 0 0 3.142-3.143V16.49a.75.75 0 0 1 1.5 0v1.577a4.65 4.65 0 0 1-4.643 4.642M8.4 22.71H7.141a4.65 4.65 0 0 1-4.643-4.643V16.49a.75.75 0 0 1 1.5 0v1.577a3.146 3.146 0 0 0 3.143 3.142h1.257a.75.75 0 0 1 0 1.5M3.249 10.178a.75.75 0 0 1-.75-.75V7.851a4.65 4.65 0 0 1 4.643-4.642h1.289a.75.75 0 0 1 0 1.5H7.142a3.146 3.146 0 0 0-3.143 3.142v1.577a.75.75 0 0 1-.75.75M21.249 10.178a.75.75 0 0 1-.75-.75V7.851a3.146 3.146 0 0 0-3.143-3.142h-1.257a.75.75 0 0 1 0-1.5h1.257a4.65 4.65 0 0 1 4.643 4.642v1.577a.75.75 0 0 1-.75.75M13.473 17.747h-2.448a1.793 1.793 0 0 1-1.7-2.353l.606-1.817a3.16 3.16 0 0 1-.885-2.2 3.203 3.203 0 0 1 6.407 0c.002.82-.315 1.61-.885 2.2l.605 1.815a1.79 1.79 0 0 1-1.7 2.355m-1.225-8.075a1.7 1.7 0 0 0-1.006 3.07.75.75 0 0 1 .266.84l-.76 2.284a.29.29 0 0 0 .276.381h2.448a.28.28 0 0 0 .234-.12.28.28 0 0 0 .041-.263l-.76-2.283a.75.75 0 0 1 .266-.84 1.7 1.7 0 0 0-1.005-3.069"
    />
  </Svg>
);
export default IconlystScanLockOutline;
