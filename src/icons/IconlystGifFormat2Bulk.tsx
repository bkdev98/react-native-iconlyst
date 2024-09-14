import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormat2Bulk = ({
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
      d="M18.767 3.672H6.901c-2.732 0-4.567 1.917-4.567 4.77v7.1c0 2.859 1.835 4.78 4.567 4.78h11.865c2.732 0 4.568-1.921 4.568-4.78v-7.1c0-2.853-1.836-4.77-4.567-4.77"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.11 9.863h2.365a.75.75 0 0 0 0-1.5H16.36a.75.75 0 0 0-.75.75v5.76a.75.75 0 0 0 1.5 0v-1.65h1.886a.75.75 0 0 0 0-1.5H17.11zM13.358 15.623a.75.75 0 0 0 .75-.75v-5.76a.75.75 0 0 0-1.5 0v5.76c0 .414.336.75.75.75M8.943 15.703c1.528 0 2.44-.78 2.44-2.09v-1.62a.75.75 0 0 0-.75-.75h-1.69a.75.75 0 0 0 0 1.5h.94v.87c0 .263 0 .59-.94.59a1.87 1.87 0 0 1-1.388-.575c-.415-.432-.637-1.072-.61-1.754.026-.6.296-1.175.74-1.58.39-.356.876-.535 1.373-.512q.449.021.859.23a.75.75 0 1 0 .68-1.337 3.6 3.6 0 0 0-1.465-.39 3.42 3.42 0 0 0-2.457.9 3.8 3.8 0 0 0-1.228 2.626c-.044 1.09.329 2.13 1.025 2.856a3.4 3.4 0 0 0 2.47 1.036"
    />
  </Svg>
);
export default IconlystGifFormat2Bulk;
