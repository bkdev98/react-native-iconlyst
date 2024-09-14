import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMiroOutline = ({
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
      d="M14.007 4.102a.75.75 0 0 1 .642-.364h2.306a.75.75 0 0 1 .415.126l4.046 2.692a.75.75 0 0 1 .297.858l-4.046 12.328a.75.75 0 0 1-.713.516H14.65a.75.75 0 0 1-.74-.868l1.798-11.31-1.72-3.24a.75.75 0 0 1 .02-.738m1.89 1.136 1.252 2.36a.75.75 0 0 1 .079.469l-1.7 10.691h.883l3.699-11.27-3.382-2.25zM2.37 4.082A.75.75 0 0 1 3 3.738h2.211a.75.75 0 0 1 .518.208l4.413 4.209a.75.75 0 0 1 .177.826l-4.414 10.81a.75.75 0 0 1-.694.467H3a.75.75 0 0 1-.733-.91l2.158-9.895-2.108-4.655a.75.75 0 0 1 .053-.716m1.793 1.156 1.731 3.823a.75.75 0 0 1 .05.469L3.93 18.758h.776l4.03-9.87-3.826-3.65z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.154 4.1a.75.75 0 0 1 .642-.362h2.195a.75.75 0 0 1 .476.17l4.126 3.388a.75.75 0 0 1 .232.83L11.698 19.76a.75.75 0 0 1-.707.5H8.796a.75.75 0 0 1-.735-.9l2.142-10.576-2.071-3.946a.75.75 0 0 1 .022-.737m1.883 1.138 1.618 3.084a.75.75 0 0 1 .071.497l-2.013 9.94h.748L14.235 8.12l-3.512-2.883z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMiroOutline;
