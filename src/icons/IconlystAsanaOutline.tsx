import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAsanaOutline = ({
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
      d="M6.373 12.41a4.127 4.127 0 0 1 4.13 4.126 4.126 4.126 0 1 1-4.13-4.126m0 1.5a2.626 2.626 0 1 0 2.63 2.627M6.373 13.91a2.626 2.626 0 0 1 2.628 2.626M17.621 12.41a4.127 4.127 0 0 1 4.13 4.126 4.126 4.126 0 1 1-4.13-4.126m0 1.5a2.626 2.626 0 1 0 2.63 2.627m-2.629-2.627a2.626 2.626 0 0 1 2.628 2.626M11.997 3.34a4.127 4.127 0 0 1 4.13 4.126 4.126 4.126 0 1 1-4.13-4.126m0 1.5a2.626 2.626 0 1 0 2.63 2.626M11.997 4.84a2.627 2.627 0 0 1 2.628 2.626"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAsanaOutline;
