import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSquareLineLight = ({
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
      d="M3 16.218V7.783C3 4.835 5.081 3 8.026 3h7.948C18.919 3 21 4.835 21 7.783v8.435C21 19.166 18.919 21 15.974 21H8.026C5.081 21 3 19.156 3 16.218M7.3 9.274v5.451"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.128 15.04-3.05-3.041 3.05-3.038M10.078 12h6.623"
    />
  </Svg>
);
export default IconlystLeftSquareLineLight;
