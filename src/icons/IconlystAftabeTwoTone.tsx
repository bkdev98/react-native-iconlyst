import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAftabeTwoTone = ({
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
      strokeWidth={1.5}
      d="m7.862 4.303.46 4.343L6.404 10.7c-.485.52-.7 1.238-.58 1.94l1.13 6.618C7.248 20.446 8.847 21 10.773 21s3.525-.555 3.819-1.74l1.13-6.618a2.28 2.28 0 0 0-.58-1.941l-1.866-2.056.407-4.342"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.799 12.167c1.101.33 2.955.547 5.056.547 2 0 3.776-.197 4.897-.497"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.691 8.357c0 .318-1.36.577-2.919.578-1.558-.001-2.918-.26-2.918-.578"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.683 3.949c0 .524-1.302.948-2.91.948S7.86 4.473 7.86 3.95 9.165 3 10.772 3c1.609 0 2.911.425 2.911.949"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.728 5.645S5.225 4.999 4.51 7.249c-.252.798-.138 1.667.232 2.417l1.098 2.066"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.627 6.393-4.914 5.429"
    />
  </Svg>
);
export default IconlystAftabeTwoTone;
