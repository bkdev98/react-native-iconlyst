import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAftabeLight = ({
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
      d="m7.363 4.303.46 4.343L5.905 10.7c-.485.52-.7 1.238-.58 1.94l1.13 6.618C6.749 20.446 8.348 21 10.274 21s3.525-.555 3.819-1.74l1.13-6.618a2.28 2.28 0 0 0-.58-1.941l-1.866-2.056.407-4.342"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.299 12.167c1.101.33 2.955.547 5.056.547 2 0 3.776-.197 4.897-.497M13.191 8.357c0 .318-1.36.577-2.919.578-1.558-.001-2.918-.26-2.918-.578"
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.405 18.057c-1.095 0-1.59-1.3-1.116-2.09.44-.677 1.116-1.145 1.116-1.145s.675.468 1.115 1.144c.473.791-.021 2.091-1.115 2.091"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAftabeLight;
