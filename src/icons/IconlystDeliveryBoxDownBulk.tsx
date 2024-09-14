import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxDownBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.218 2.5H7.783C4.623 2.5 2.5 4.722 2.5 8.03v7.94c0 3.307 2.123 5.53 5.283 5.53h8.435c3.159 0 5.282-2.223 5.282-5.53V8.03c0-3.308-2.123-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m15.5 13.998 1.665-1.67a.75.75 0 0 0-1.062-1.059l-.384.385V7.28a.75.75 0 0 0-1.5 0v4.374l-.383-.384a.751.751 0 0 0-1.063 1.06l1.664 1.668q.105.105.244.163c.07.03.148.04.226.046.02.002.04.013.062.013a.8.8 0 0 0 .29-.059c.06-.026.11-.069.162-.109.026-.019.057-.03.08-.053M7.463 17.47h9.077a.75.75 0 0 0 0-1.5H7.463a.75.75 0 0 0 0 1.5M7.898 11.27a.749.749 0 1 0-1.062 1.058l1.665 1.67q.104.105.243.162c.07.03.149.04.227.046.02.002.04.013.062.013a.8.8 0 0 0 .29-.059c.06-.026.11-.069.16-.109.027-.019.058-.03.08-.053l1.665-1.67a.751.751 0 0 0-1.062-1.059l-.384.386V7.28a.75.75 0 0 0-1.5 0v4.375z"
    />
  </Svg>
);
export default IconlystDeliveryBoxDownBulk;
