import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightCircleOutlinecurved = ({
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
      d="M10.983 7.91a.75.75 0 1 0-.848 1.238c1.59 1.087 3.07 2.434 3.166 2.82-.097.447-1.577 1.794-3.166 2.884a.751.751 0 0 0 .848 1.238C12.41 15.112 14.8 13.282 14.8 12c0-1.285-2.39-3.114-3.816-4.09"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22 12c0-7.383-2.617-10-10-10S2 4.617 2 12s2.617 10 10 10 10-2.617 10-10m-1.5 0c0 6.514-1.986 8.5-8.5 8.5S3.5 18.514 3.5 12 5.486 3.5 12 3.5s8.5 1.986 8.5 8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightCircleOutlinecurved;
