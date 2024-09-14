import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVdeoTvBulk = ({
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
      d="M17.806 3.031H7.862a4.535 4.535 0 0 0-4.528 4.531v5.45a4.534 4.534 0 0 0 4.528 4.53h9.944a4.534 4.534 0 0 0 4.528-4.53v-5.45a4.535 4.535 0 0 0-4.528-4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.402 11.763.007-.007c.443-.408.687-.932.685-1.474s-.246-1.06-.688-1.463a8.7 8.7 0 0 0-2.56-1.61c-.568-.23-1.17-.203-1.656.078-.474.276-.777.75-.856 1.353a15.6 15.6 0 0 0 .001 3.307c.074.583.368 1.058.83 1.334.268.16.571.242.89.242.254 0 .52-.051.787-.154a8.9 8.9 0 0 0 2.56-1.606m-3.126-3.165a.6.6 0 0 0-.202-.044.3.3 0 0 0-.131.031c-.08.046-.108.154-.12.237-.103.927-.103 1.926.003 2.955.007.05.033.171.11.217.074.046.207.036.356-.02a7.4 7.4 0 0 0 2.106-1.324c.09-.085.197-.216.196-.364 0-.147-.107-.275-.197-.357a7.2 7.2 0 0 0-2.121-1.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.338 19.464h8.99a.75.75 0 0 1 0 1.5h-8.99a.75.75 0 0 1 0-1.5"
    />
  </Svg>
);
export default IconlystVdeoTvBulk;
