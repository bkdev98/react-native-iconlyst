import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIPhoneBulk = ({
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
      d="M11.05 18.32c0 .533.417.95.95.95.448 0 .95-.406.95-.95s-.502-.95-.95-.95-.95.406-.95.95"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.85 13.85a.3.3 0 0 1-.3.3H5.45a.3.3 0 0 1-.3-.3V6.599A4.103 4.103 0 0 1 9.25 2.5h5.5c2.261 0 4.1 1.838 4.1 4.099zm-13.7 2.1a.3.3 0 0 1 .3-.3h13.1a.3.3 0 0 1 .3.3v1.45c0 2.26-1.839 4.1-4.1 4.1h-5.5a4.104 4.104 0 0 1-4.1-4.1z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIPhoneBulk;
