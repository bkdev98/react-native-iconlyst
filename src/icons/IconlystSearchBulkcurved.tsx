import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBulkcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.514 2.202c-4.996 0-9.061 4.065-9.061 9.062s4.065 9.06 9.06 9.06c4.997 0 9.062-4.064 9.062-9.06s-4.065-9.062-9.061-9.062"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.137 17.977a1.913 1.913 0 0 0-1.912 1.91c0 1.054.858 1.91 1.912 1.91s1.91-.856 1.91-1.91-.857-1.91-1.91-1.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchBulkcurved;
