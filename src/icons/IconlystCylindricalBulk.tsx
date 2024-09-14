import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalBulk = ({
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
      d="M19.36 6.49C19.22 4.19 16.04 2.4 12 2.4S4.78 4.19 4.64 6.49c-.01.05-.01.11-.01.16v11c0 .05 0 .11.01.16.14 2.31 3.32 4.09 7.36 4.09s7.22-1.78 7.36-4.09c.01-.05.01-.11.01-.16v-11c0-.05 0-.11-.01-.16"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.87 6.65c0-1.3-2.41-2.75-5.87-2.75S6.13 5.35 6.13 6.65C6.13 7.96 8.54 9.4 12 9.4s5.87-1.44 5.87-2.75"
    />
  </Svg>
);
export default IconlystCylindricalBulk;
