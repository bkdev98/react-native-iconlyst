import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen4Bold = ({
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
      d="m17.563 12.266-4 3.199a2.7 2.7 0 0 1-1.617.556 2.65 2.65 0 0 1-1.595-.547l-3.919-3.212a.5.5 0 0 1-.183-.387c0-1.944 1.295-3.2 3.3-3.2h4.902c2.005 0 3.299 1.256 3.299 3.2a.5.5 0 0 1-.187.39m2.474-4.702L13.81 3.246c-.023-.013-.046-.022-.069-.035a3.24 3.24 0 0 0-1.74-.486 3.23 3.23 0 0 0-1.742.486c-.023.013-.046.022-.069.035L3.964 7.564c-.968.725-1.515 1.782-1.515 2.91v5.9c0 3.024 1.954 4.9 5.101 4.9h8.902c3.146 0 5.1-1.876 5.1-4.9v-5.9c0-1.128-.546-2.185-1.514-2.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailOpen4Bold;
