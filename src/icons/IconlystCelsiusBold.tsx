import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelsiusBold = ({
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
      d="M16.269 12.005a1.82 1.82 0 0 1-1.82-1.82c0-1.004.816-1.82 1.82-1.82 1.003 0 1.819.816 1.819 1.82s-.817 1.82-1.82 1.82m0 3.268c-1.046 1.354-2.633 2.162-4.247 2.162a5.346 5.346 0 0 1-5.338-5.34c0-2.99 2.395-5.42 5.337-5.42.695 0 1.393.133 2.016.385a.75.75 0 0 1-.562 1.39 3.9 3.9 0 0 0-1.453-.275c-2.116 0-3.838 1.758-3.838 3.92 0 2.153 1.686 3.84 3.838 3.84 1.136 0 2.307-.605 3.06-1.58a.75.75 0 0 1 1.187.917m-4.27-12.768c-5.237 0-9.5 4.262-9.5 9.5s4.263 9.5 9.5 9.5c5.24 0 9.5-4.262 9.5-9.5s-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelsiusBold;
