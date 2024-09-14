import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeRight2Broken = ({
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
      d="M6.392 17.066c-.633-1.856-.896-3.926-.893-5.694.001-.948.775-1.69 1.723-1.705a1.816 1.816 0 0 1 1.79 1.359l.528 2.029 3.261-8.961a1.662 1.662 0 0 1 3.133 1.113L14.525 9.27c2.11 1.005 5.316 2.044 5.332 4.752.016 2.725-2.016 5.584-4.143 6.575-1.941.905-5.365.205-7.522-1.338M7.987 3.285l1.858 1.048-1.048 1.858"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.847 4.348c-2.453.427-4.57 1.283-5.704 3.196"
    />
  </Svg>
);
export default IconlystSwipeRight2Broken;
