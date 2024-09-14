import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareOutlinecurved = ({
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
      d="M12.331 7.498c.144 0 .29.04.418.128 1.23.827 4.091 2.909 4.091 4.374s-2.862 3.545-4.092 4.37a.75.75 0 0 1-.836-1.246c1.175-.789 2.281-1.706 2.906-2.374H7.92a.75.75 0 0 1 0-1.5h6.906c-.623-.662-1.734-1.585-2.915-2.38a.75.75 0 0 1 .42-1.372"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22 12c0-7.383-2.617-10-10-10S2 4.617 2 12s2.617 10 10 10 10-2.617 10-10m-1.5 0c0 6.514-1.986 8.5-8.5 8.5S3.5 18.514 3.5 12 5.486 3.5 12 3.5s8.5 1.986 8.5 8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightSquareOutlinecurved;
