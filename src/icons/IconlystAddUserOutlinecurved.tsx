import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserOutlinecurved = ({
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
      d="M9.876 11.986h.032a5.29 5.29 0 0 0 5.283-5.283 5.29 5.29 0 0 0-5.283-5.282 5.29 5.29 0 0 0-5.283 5.28 5.273 5.273 0 0 0 5.251 5.285m-3.75-5.283a3.786 3.786 0 0 1 3.782-3.782 3.786 3.786 0 0 1 3.783 3.782 3.787 3.787 0 0 1-3.783 3.783H9.88a3.77 3.77 0 0 1-3.754-3.783M2.087 18.942c0 3.26 4.464 3.637 7.822 3.637 1.935 0 7.822 0 7.822-3.657 0-2.787-3.582-5.141-7.822-5.141s-7.822 2.363-7.822 5.16m1.5 0c0-1.728 2.704-3.661 6.322-3.661s6.322 1.922 6.322 3.64c0 1.432-2.127 2.158-6.322 2.158s-6.322-.72-6.322-2.137"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.117 12.91a.75.75 0 0 1-.75-.75v-1.255h-1.294a.75.75 0 0 1 0-1.5h1.293V8.15a.75.75 0 0 1 1.5 0v1.255h1.297a.75.75 0 0 1 0 1.5h-1.297v1.255a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystAddUserOutlinecurved;
