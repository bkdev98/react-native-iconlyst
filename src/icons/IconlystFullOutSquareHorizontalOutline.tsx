import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutSquareHorizontalOutline = ({
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
      d="M17.541 20.999H6.459c-1.56 0-2.882-.556-3.81-1.553-.924-.992-1.401-2.358-1.401-3.886V8.44c0-1.528.477-2.894 1.4-3.886.929-.997 2.252-1.553 3.812-1.553h11.081c1.56 0 2.883.556 3.81 1.553.923.992 1.401 2.358 1.401 3.886v7.12c0 1.53-.48 2.895-1.404 3.886-.928.996-2.25 1.552-3.807 1.552m-11.082-1.5h11.082c1.185 0 2.094-.415 2.71-1.076.622-.667 1.001-1.645 1.001-2.863V8.44c0-1.219-.378-2.197-.998-2.863-.615-.66-1.523-1.076-2.713-1.076H6.461c-1.191 0-2.1.415-2.715 1.076-.62.666-.998 1.644-.998 2.863v7.12c0 1.219.377 2.197.998 2.863.615.66 1.524 1.076 2.713 1.076"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.53 8.47a.75.75 0 0 1 0 1.06L15.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0M6.47 8.47a.75.75 0 0 0 0 1.06L8.94 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullOutSquareHorizontalOutline;
