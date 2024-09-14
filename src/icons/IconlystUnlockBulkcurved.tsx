import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBulkcurved = ({
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
      d="m9.187 9.203.122-.017c.145-.018.338-.044.57-.076a22 22 0 0 1 2.371-.116c6.024 0 8.16 1.772 8.16 6.771 0 5-2.136 6.772-8.16 6.772s-8.16-1.772-8.16-6.772c0-2.7.627-4.457 2.15-5.502a8.8 8.8 0 0 1 2.557-.991q.19-.037.39-.07"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.25 17.797a.75.75 0 0 0 .75-.75v-2.22a.75.75 0 0 0-1.5 0v2.22c0 .414.336.75.75.75M8.439 9.36V7.917a3.79 3.79 0 0 1 3.76-3.746h.048a3.845 3.845 0 0 1 3.656 2.707.75.75 0 1 0 1.434-.439c-.69-2.248-2.851-3.783-5.156-3.768a5.284 5.284 0 0 0-5.242 5.234v1.983a12.5 12.5 0 0 1 1.5-.528"
    />
  </Svg>
);
export default IconlystUnlockBulkcurved;
