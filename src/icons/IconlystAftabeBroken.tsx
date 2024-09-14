import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAftabeBroken = ({
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
      d="m7.362 4.303.46 4.343L5.904 10.7c-.485.52-.7 1.238-.58 1.94l1.13 6.618C6.748 20.446 8.347 21 10.273 21m2.91-16.697-.407 4.342L14.64 10.7c.486.52.7 1.238.581 1.94l-1.13 6.618c-.145.584-.606 1.015-1.267 1.302"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.252 12.217c-1.121.3-2.898.497-4.897.497-.713 0-1.397-.025-2.033-.07M13.191 8.357c0 .319-1.36.577-2.919.578-1.558 0-2.918-.26-2.918-.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.183 3.949c0 .524-1.302.948-2.91.948S7.36 4.473 7.36 3.95 8.665 3 10.272 3c1.609 0 2.911.425 2.911.949"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.228 5.645S4.725 4.999 4.01 7.249c-.252.798-.138 1.667.232 2.417l1.098 2.066M20.127 6.393l-4.914 5.429"
    />
  </Svg>
);
export default IconlystAftabeBroken;
