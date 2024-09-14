import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchOutlinecurved = ({
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
      d="M11.525 3.464a7.81 7.81 0 0 0-7.81 7.811 7.81 7.81 0 1 0 7.81-7.81m-9.31 7.811a9.31 9.31 0 0 1 9.31-9.31 9.311 9.311 0 1 1 0 18.621 9.31 9.31 0 0 1-9.31-9.31M20.149 19.238a.662.662 0 1 0 0 1.323.662.662 0 0 0 0-1.323m-2.161.66a2.162 2.162 0 1 1 4.323.003 2.162 2.162 0 0 1-4.323-.003"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchOutlinecurved;
