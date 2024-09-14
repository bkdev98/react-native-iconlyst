import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagCheckTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.544 10.654V7.735c0-2.788-1.738-4.758-4.53-4.758H8.029c-2.783 0-4.528 1.97-4.528 4.758v7.526c0 2.788 1.736 4.76 4.528 4.76h3.38"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.412 8.484a3.39 3.39 0 0 1-3.39 3.39v0a3.39 3.39 0 0 1-3.39-3.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 17.322a3.701 3.701 0 1 1-7.402 0 3.701 3.701 0 0 1 7.402 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.704 16.926 1.345 1.344 2.894-2.895"
    />
  </Svg>
);
export default IconlystShoppingBagCheckTwoTone;
