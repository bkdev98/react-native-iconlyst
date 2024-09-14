import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsRightOutline = ({
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
      d="M17.294 13.594a.75.75 0 0 1 1.06.002l3.177 3.187a.75.75 0 0 1 0 1.059l-3.176 3.187a.75.75 0 0 1-1.063-1.058l1.902-1.908H3a.75.75 0 0 1 0-1.5h16.194l-1.902-1.909a.75.75 0 0 1 .002-1.06M17.294 2.969a.75.75 0 0 1 1.06.002l3.177 3.187a.75.75 0 0 1 0 1.059l-3.176 3.187a.75.75 0 0 1-1.063-1.058l1.902-1.908H3a.75.75 0 0 1 0-1.5h16.194l-1.902-1.909a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsRightOutline;
