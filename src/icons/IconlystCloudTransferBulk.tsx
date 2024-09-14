import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudTransferBulk = ({
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
      d="M18.118 6.055h-3.196a2.77 2.77 0 0 0-1.51-.711c-.21-1.285-1.265-2.844-3.27-2.844S7.083 4.059 6.873 5.344c-1.429.205-2.39 1.318-2.39 2.839 0 1.127.662 2.155 1.708 2.627.367.15.773.232 1.142.232h5.615c.37 0 .776-.081 1.166-.237a2.88 2.88 0 0 0 1.688-2.622c0-.219-.026-.427-.064-.628h2.38c.635 0 1.151.517 1.151 1.151v3.328a.75.75 0 1 0 1.5 0V8.706a2.654 2.654 0 0 0-2.65-2.651"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.106 15.804c-.21-1.284-1.264-2.843-3.27-2.843-2.003 0-3.058 1.559-3.267 2.843-1.43.205-2.393 1.318-2.393 2.84 0 .084.01.165.019.248H6.883A1.154 1.154 0 0 1 5.73 17.74v-3.328a.75.75 0 1 0-1.5 0v3.328a2.655 2.655 0 0 0 2.652 2.652h2.899c.285.369.656.677 1.103.879a3.1 3.1 0 0 0 1.142.23h5.615a3.2 3.2 0 0 0 1.166-.235 2.88 2.88 0 0 0 1.689-2.622c0-1.522-.962-2.635-2.391-2.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudTransferBulk;
