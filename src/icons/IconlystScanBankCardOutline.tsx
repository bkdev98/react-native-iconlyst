import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardOutline = ({
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
      d="M15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.892v1.577a.75.75 0 0 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H16.1a.75.75 0 0 1-.75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.892v1.577a.75.75 0 0 1-1.5 0V6.892A4.64 4.64 0 0 1 7.143 2.25h1.289a.75.75 0 0 1 0 1.5zM3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M21.25 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.289a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M7.317 8.009c.536-.575 1.29-.884 2.15-.884h5.565c.861 0 1.616.309 2.151.884.53.57.79 1.34.79 2.169v3.641c0 .83-.26 1.599-.79 2.168-.535.576-1.29.885-2.15.885H9.465c-.86 0-1.615-.31-2.15-.885-.53-.57-.79-1.339-.79-2.168v-3.641c0-.83.26-1.6.791-2.17m1.097 1.023c-.228.245-.389.627-.389 1.146v3.641c0 .52.16.902.388 1.146.222.24.563.407 1.053.407h5.566c.49 0 .831-.168 1.053-.407.228-.244.388-.626.388-1.146v-3.641c0-.52-.16-.902-.387-1.147-.222-.238-.563-.406-1.054-.406H9.466c-.487 0-.829.167-1.052.407"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.525 11.11a.75.75 0 0 1 .75-.75h9.948a.75.75 0 0 1 0 1.5H7.275a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanBankCardOutline;
