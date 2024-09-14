import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftOutline = ({
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
      d="M6.706 13.594a.75.75 0 0 1 .002 1.06l-1.902 1.909H21a.75.75 0 0 1 0 1.5H4.806l1.902 1.908a.75.75 0 1 1-1.063 1.058L2.47 17.842a.75.75 0 0 1 0-1.059l3.176-3.187a.75.75 0 0 1 1.06-.002M6.706 2.969a.75.75 0 0 1 .002 1.06L4.806 5.938H21a.75.75 0 0 1 0 1.5H4.806l1.902 1.908a.75.75 0 1 1-1.063 1.058L2.47 7.217a.75.75 0 0 1 0-1.059l3.176-3.187a.75.75 0 0 1 1.06-.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsLeftOutline;
