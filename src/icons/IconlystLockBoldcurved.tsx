import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.06 9.349c-1.046-.244-2.307-.354-3.81-.354s-2.764.11-3.81.354V7.916A3.79 3.79 0 0 1 12.2 4.17c1.03-.029 1.982.372 2.71 1.082a3.78 3.78 0 0 1 1.15 2.672zM13 17.047a.75.75 0 0 1-1.5 0v-2.22a.75.75 0 0 1 1.5 0zm4.56-7.186V7.916a5.27 5.27 0 0 0-1.603-3.735c-1.015-.99-2.37-1.481-3.777-1.51a5.286 5.286 0 0 0-5.24 5.236v1.957c-2.034.97-2.85 2.82-2.85 5.903 0 5 2.136 6.772 8.16 6.772 6.025 0 8.16-1.773 8.16-6.773 0-3.081-.816-4.933-2.85-5.904"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockBoldcurved;
