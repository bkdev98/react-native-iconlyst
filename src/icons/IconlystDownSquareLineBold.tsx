import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareLineBold = ({
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
      d="m15.57 11.716-3.038 3.048a.7.7 0 0 1-.245.164c-.063.026-.134.032-.203.04-.029.005-.054.018-.084.018a.8.8 0 0 1-.291-.059c-.061-.025-.11-.069-.162-.107-.025-.021-.056-.031-.08-.055l-3.038-3.05a.75.75 0 1 1 1.063-1.059l1.758 1.765V7.614a.75.75 0 0 1 1.5 0v4.808l1.758-1.764a.749.749 0 1 1 1.062 1.059m-.846 6.049h-5.45a.75.75 0 0 1 0-1.5h5.45a.75.75 0 0 1 0 1.5m1.493-14.952H7.783c-3.16 0-5.283 2.22-5.283 5.526v7.948c0 3.305 2.123 5.526 5.283 5.526h8.434c3.16 0 5.283-2.221 5.283-5.526V8.34c0-3.306-2.123-5.527-5.283-5.527"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareLineBold;
