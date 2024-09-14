import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownSquareOutlinecurved = ({
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
      d="M16.502 12.331a.74.74 0 0 1-.128.418c-.827 1.23-2.909 4.091-4.374 4.091s-3.545-2.862-4.37-4.092a.75.75 0 0 1 1.246-.836c.789 1.175 1.706 2.281 2.374 2.906V7.92a.75.75 0 0 1 1.5 0v6.906c.662-.623 1.585-1.734 2.38-2.915a.75.75 0 0 1 1.372.42"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 22c7.383 0 10-2.617 10-10S19.383 2 12 2 2 4.617 2 12s2.617 10 10 10m0-1.5c-6.514 0-8.5-1.986-8.5-8.5S5.486 3.5 12 3.5s8.5 1.986 8.5 8.5-1.986 8.5-8.5 8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownSquareOutlinecurved;
