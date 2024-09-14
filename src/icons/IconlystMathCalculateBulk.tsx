import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMathCalculateBulk = ({
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
      d="M8.066 21.5h8.435c3.16 0 5.282-2.223 5.282-5.53V8.03c0-3.307-2.122-5.53-5.282-5.53H8.066c-3.16 0-5.283 2.223-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.987 10.97a.75.75 0 0 0 1.5 0V9.91h1.054a.75.75 0 0 0 0-1.5H9.487V7.36a.75.75 0 0 0-1.5 0v1.05H6.933a.75.75 0 0 0 0 1.5h1.054zM17.104 17.17c.146.146.338.22.53.22a.749.749 0 0 0 .53-1.28l-.744-.746.744-.745a.749.749 0 1 0-1.06-1.06l-.745.746-.746-.745a.749.749 0 1 0-1.06 1.06l.745.745-.745.745a.749.749 0 1 0 1.06 1.06l.746-.746zM11.07 16.09H7.463a.75.75 0 0 1 0-1.5h3.609a.75.75 0 0 1 0 1.5M13.969 10.98c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l2.55-2.55a.749.749 0 1 0-1.06-1.06l-2.55 2.55a.75.75 0 0 0 0 1.06"
    />
  </Svg>
);
export default IconlystMathCalculateBulk;
