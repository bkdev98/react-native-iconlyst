import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaintingPaletteBulk = ({
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
      fillRule="evenodd"
      d="M20.178 6.457c-1.612-1.935-4.158-3.005-7.168-3.012h-.028c-5.104 0-8.863 3.2-9.58 8.158-.407 2.81.516 5.66 2.534 7.82 1.814 1.942 4.247 3.022 6.763 3.022q.33 0 .661-.024c.877-.067 1.556-.43 1.91-1.026.35-.585.354-1.326.014-2.085-.21-.47-.406-1.13-.135-1.604.248-.434.827-.584 1.27-.634 2.064-.23 3.741-1.134 4.718-2.547 1.72-2.48.82-5.937-.959-8.068"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.501 6.138a1.169 1.169 0 1 0 1.167 1.168c0-.645-.523-1.168-1.167-1.168M9.883 7.23a1.168 1.168 0 1 0 .002 2.335 1.168 1.168 0 0 0-.002-2.335M18.022 9.765a1.17 1.17 0 0 0-1.168 1.168 1.17 1.17 0 0 0 2.336 0 1.17 1.17 0 0 0-1.168-1.168M7.338 11.333a1.169 1.169 0 0 0 0 2.336 1.168 1.168 0 0 0 0-2.336"
    />
  </Svg>
);
export default IconlystPaintingPaletteBulk;
