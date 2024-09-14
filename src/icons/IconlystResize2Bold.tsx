import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize2Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.295 14.537-2.29 2.29.003-1.255a1 1 0 0 0-.998-1.002h-.002a1 1 0 0 0-1 .998l-.006 2.672c0 .536.208 1.04.586 1.42.378.377.88.585 1.415.585h.003l2.673-.006a1 1 0 0 0-.002-2h-.002l-1.256.003 2.29-2.29a.999.999 0 1 0-1.414-1.415M5.01 9.927h.002a1 1 0 0 0 .998-1.002l-.006-2.673 2.673.006h.002a1 1 0 0 0 .002-2l-2.673-.006h-.004c-.534 0-1.036.208-1.414.586a1.99 1.99 0 0 0-.586 1.418l.006 2.673a1 1 0 0 0 1 .998M18.992 14.572h-.002a1 1 0 0 0-.998 1.002l.006 2.673-2.673-.006h-.002a1 1 0 0 0-.002 2l2.673.006h.004c.534 0 1.036-.208 1.414-.586.379-.379.587-.882.586-1.418l-.006-2.673a1 1 0 0 0-1-.998M15.704 9.959l2.29-2.29-.003 1.254a1 1 0 0 0 .997 1.003h.003a1 1 0 0 0 1-.998l.006-2.672a1.99 1.99 0 0 0-.585-1.418 1.99 1.99 0 0 0-1.415-.586h-.003l-2.674.005a1 1 0 0 0 .002 2h.002l1.257-.003-2.291 2.291a.999.999 0 1 0 1.414 1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize2Bold;
