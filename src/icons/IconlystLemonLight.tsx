import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLemonLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.84 4.019c-3.248-1.194-6.998-.287-9.516 2.304-2.599 2.525-3.504 6.289-2.295 9.544.554 1.205-.754 2.346.502 3.602s2.397-.052 3.603.502c3.254 1.21 7.018.304 9.543-2.295 2.59-2.518 3.498-6.268 2.304-9.517-.553-1.25.923-2.397-.41-3.73s-2.48.142-3.73-.41"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.464 16.65c1.42.528 3.06.133 4.161-1"
    />
  </Svg>
);
export default IconlystLemonLight;
