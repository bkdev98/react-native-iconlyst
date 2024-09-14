import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareOutlinecurved = ({
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
      d="M7.498 11.669c0-.144.04-.29.128-.418C8.453 10.02 10.535 7.16 12 7.16s3.545 2.862 4.37 4.092a.75.75 0 0 1-1.246.836c-.789-1.175-1.706-2.281-2.374-2.906v6.898a.75.75 0 0 1-1.5 0V9.174c-.662.623-1.585 1.734-2.38 2.915a.75.75 0 0 1-1.372-.42"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 2C4.617 2 2 4.617 2 12s2.617 10 10 10 10-2.617 10-10S19.383 2 12 2m0 1.5c6.514 0 8.5 1.986 8.5 8.5s-1.986 8.5-8.5 8.5-8.5-1.986-8.5-8.5S5.486 3.5 12 3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpSquareOutlinecurved;
