import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMathCalculateBold = ({
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
      d="M16.501 21.5H8.066c-3.16 0-5.283-2.223-5.283-5.53V8.03c0-3.307 2.123-5.53 5.283-5.53h8.435c3.16 0 5.282 2.223 5.282 5.53v7.94c0 3.307-2.123 5.53-5.282 5.53M7.986 10.97a.75.75 0 0 0 1.5 0V9.91h1.055a.75.75 0 0 0 0-1.5H9.486V7.36a.75.75 0 0 0-1.5 0v1.05H6.932a.75.75 0 0 0 0 1.5h1.054zm6.512.24a.748.748 0 0 1-.531-1.279l2.55-2.56a.75.75 0 1 1 1.064 1.059l-2.552 2.559a.74.74 0 0 1-.531.22m-.472 4.88h3.609a.75.75 0 0 0 0-1.5h-3.61a.75.75 0 0 0 0 1.5m-4.014 1.3a.74.74 0 0 1-.53-.22l-.745-.746-.746.745a.75.75 0 0 1-1.061-1.06l.746-.745-.746-.745a.749.749 0 1 1 1.061-1.06l.746.746.745-.745a.749.749 0 1 1 1.06 1.06l-.745.745.745.745a.749.749 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMathCalculateBold;
