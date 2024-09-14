import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartPhone2Bold = ({
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
      fillRule="evenodd"
      d="M11.95 18.15a.97.97 0 0 1-.95-.95c0-.51.44-.95.95-.95s.95.44.95.95-.44.95-.95.95m2.8-15.65h-5.5c-2.26 0-4.1 1.84-4.1 4.1v10.8c0 2.26 1.84 4.1 4.1 4.1h5.5c2.26 0 4.1-1.84 4.1-4.1V6.6c0-2.26-1.84-4.1-4.1-4.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartPhone2Bold;
