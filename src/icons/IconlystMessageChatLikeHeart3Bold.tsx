import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart3Bold = ({
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
      d="M14.045 9.145a1.27 1.27 0 0 0-1.124.192.75.75 0 0 1-.89 0 1.25 1.25 0 0 0-1.127-.19c-.779.253-.966 1.124-.745 1.814.331 1.028 1.57 1.997 2.317 2.477.753-.484 2-1.458 2.318-2.472.223-.694.036-1.565-.749-1.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.224 11.421c-.625 1.986-3.105 3.395-3.386 3.55a.76.76 0 0 1-.72 0c-.111-.06-2.727-1.507-3.386-3.549-.512-1.598.239-3.224 1.71-3.703a2.76 2.76 0 0 1 2.037.142 2.8 2.8 0 0 1 2.02-.146c1.485.483 2.238 2.11 1.725 3.706m1.314-8.56H7.416a4.446 4.446 0 0 0-4.44 4.441v6.91a4.445 4.445 0 0 0 4.44 4.44h1.068c.434 0 .863.177 1.172.482l1.422 1.431.003.003c.385.38.89.57 1.395.57.507 0 1.014-.192 1.4-.573l1.419-1.427a1.7 1.7 0 0 1 1.176-.486h1.067a4.444 4.444 0 0 0 4.439-4.44v-6.91a4.445 4.445 0 0 0-4.44-4.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart3Bold;
