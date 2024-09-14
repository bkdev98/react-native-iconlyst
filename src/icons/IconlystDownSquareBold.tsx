import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareBold = ({
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
      d="m15.923 13.236-3.394 3.405a.7.7 0 0 1-.232.155l-.007.005a.75.75 0 0 1-.583.001c-.057-.024-.103-.066-.152-.102-.029-.022-.063-.034-.088-.059l-3.391-3.405a.75.75 0 1 1 1.062-1.059l2.11 2.119V8.387a.75.75 0 0 1 1.5 0v5.91l2.113-2.12a.75.75 0 0 1 1.062 1.059m.05-10.486H8.026C4.72 2.75 2.5 4.872 2.5 8.032v8.433c0 3.161 2.22 5.285 5.526 5.285h7.947c3.306 0 5.527-2.123 5.527-5.284V8.032c0-3.16-2.221-5.282-5.527-5.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareBold;
