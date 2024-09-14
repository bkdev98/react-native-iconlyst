import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBulkcurved = ({
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
      d="m9.187 9.203.122-.017c.145-.018.338-.044.57-.076a22 22 0 0 1 2.371-.115c6.024 0 8.16 1.772 8.16 6.77 0 5-2.136 6.773-8.16 6.773s-8.16-1.772-8.16-6.772c0-2.7.627-4.457 2.15-5.502a8.8 8.8 0 0 1 2.557-.992q.19-.037.39-.069"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.439 9.348V7.916a3.79 3.79 0 0 1 3.76-3.746c1.03-.028 1.982.372 2.71 1.083a3.78 3.78 0 0 1 1.15 2.671v1.424q.838.194 1.5.508v-1.94a5.27 5.27 0 0 0-1.603-3.737c-1.015-.99-2.37-1.48-3.777-1.509a5.286 5.286 0 0 0-5.24 5.235v1.957zM13 17.048a.75.75 0 0 1-1.5 0v-2.221a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystLockBulkcurved;
