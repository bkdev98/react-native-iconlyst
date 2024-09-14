import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderboltOutline = ({
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
      d="M5.96 4.686a3.19 3.19 0 0 1 2.758-1.592h6.564c1.138 0 2.19.607 2.76 1.592l3.281 5.686c.57.985.57 2.2 0 3.185l-3.282 5.686a3.19 3.19 0 0 1-2.759 1.592H8.718a3.19 3.19 0 0 1-2.758-1.592l-3.283-5.686a3.18 3.18 0 0 1 0-3.185zm1.299.75-3.283 5.686c-.301.521-.301 1.164 0 1.685l3.283 5.686c.3.52.857.842 1.459.842h6.564c.603 0 1.16-.321 1.46-.842l3.282-5.686c.301-.521.301-1.164 0-1.685l-3.282-5.686c-.3-.52-.857-.842-1.46-.842H8.718c-.602 0-1.158.32-1.46.842"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.046 7.404c.71-.979 2.257-.475 2.257.733v2.144h1.99c1.018 0 1.607 1.157 1.008 1.981l-3.347 4.61c-.71.98-2.258.475-2.258-.732v-2.145H8.708a1.247 1.247 0 0 1-1.01-1.98m0 0 3.348-4.611m.757 1.51-2.6 3.58h2.243a.75.75 0 0 1 .75.75v2.119l2.6-3.582h-2.243a.75.75 0 0 1-.75-.75zm.457-.629"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThunderboltOutline;
