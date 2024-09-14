import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleOutlinecurved = ({
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
      d="M16.09 10.983a.75.75 0 1 0-1.238-.848c-1.087 1.59-2.434 3.07-2.82 3.166-.447-.097-1.794-1.577-2.884-3.166a.751.751 0 0 0-1.238.848C8.888 12.41 10.718 14.8 12 14.8c1.285 0 3.114-2.39 4.09-3.816"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 22c7.383 0 10-2.617 10-10S19.383 2 12 2 2 4.617 2 12s2.617 10 10 10m0-1.5c-6.514 0-8.5-1.986-8.5-8.5S5.486 3.5 12 3.5s8.5 1.986 8.5 8.5-1.986 8.5-8.5 8.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownCircleOutlinecurved;
