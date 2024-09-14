import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRight2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.358 14.023c.016 2.725-2.016 5.584-4.142 6.575-2.713 1.265-8.327-.607-9.323-3.532C6.26 15.21 5.997 13.14 6 11.372c.001-.948.775-1.689 1.723-1.705a1.82 1.82 0 0 1 1.79 1.36l.528 2.028 3.261-8.96a1.662 1.662 0 0 1 3.133 1.112l-1.409 4.064c2.11 1.005 5.317 2.044 5.332 4.752"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8.488 3.285 1.858 1.048-1.048 1.858"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.347 4.348c-2.453.426-4.57 1.283-5.704 3.196"
    />
  </Svg>
);
export default IconlystSwipeRight2TwoTone;
