import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalExpandAltCircleLight = ({
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
      d="M11.73 8.5H8.5m0 0v3.23m0-3.23 7 7m0-3.23v3.23m0 0h-3.23M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"
    />
  </Svg>
);
export default IconlystArrowsDiagonalExpandAltCircleLight;