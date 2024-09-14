import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClap2Outline = ({
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
      d="M2.5 8.189C2.502 6.922 3.56 5.85 4.84 5.852c1.266 0 2.337 1.058 2.336 2.338a.75.75 0 1 1-1.5 0 .86.86 0 0 0-.837-.838.86.86 0 0 0-.838.837L4 14.711a5.598 5.598 0 0 0 11.195-.001l.002-3.335a.4.4 0 0 0-.402-.402c-.699 0-1.265.567-1.265 1.266v.07a.75.75 0 0 1-1.5 0v-.07a2.766 2.766 0 0 1 2.765-2.766c1.05 0 1.903.852 1.902 1.903l-.002 3.345a7.098 7.098 0 0 1-14.195 0V8.19"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.537 5.477a2.338 2.338 0 0 1 3.99 1.655l-.002 7.41a.75.75 0 0 1-1.5-.001l.002-7.41a.838.838 0 0 0-1.675 0 .75.75 0 0 1-1.5 0c0-.621.246-1.216.685-1.654"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.537 2.942a2.338 2.338 0 0 1 3.99 1.654l-.002 7.41a.75.75 0 0 1-1.5 0l.002-7.41a.838.838 0 0 0-1.675 0 .75.75 0 0 1-1.5-.001c0-.62.246-1.215.685-1.653"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.118 3.564a2.338 2.338 0 0 1 3.232 2.161v6.7a.75.75 0 1 1-1.5 0v-6.7A.84.84 0 0 0 7.69 4.95a.84.84 0 0 0-.517.774v6.7a.75.75 0 1 1-1.5 0v-6.7a2.34 2.34 0 0 1 1.444-2.16M21.988 6.867a.75.75 0 0 1-.605.871l-1.367.246a.75.75 0 1 1-.266-1.476l1.367-.246a.75.75 0 0 1 .87.605M19.47 3.53a.75.75 0 0 1 .183 1.046l-.746 1.062a.75.75 0 1 1-1.228-.862l.746-1.062a.75.75 0 0 1 1.045-.183M17.72 9.836c-.591 0-1.09.406-1.227.957a.75.75 0 0 1-1.456-.365 2.77 2.77 0 0 1 2.683-2.092c1.051 0 1.903.852 1.902 1.903l-.002 3.345a7.1 7.1 0 0 1-6.235 6.977.75.75 0 0 1-.182-1.489 5.6 5.6 0 0 0 4.917-5.5l.002-3.334a.4.4 0 0 0-.402-.402"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.463 4.34a2.338 2.338 0 0 1 3.99 1.65l.062 4.609a.75.75 0 0 1-1.5.02l-.062-4.625a.838.838 0 0 0-1.676 0 .75.75 0 1 1-1.5 0c0-.62.247-1.215.686-1.654"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClap2Outline;
