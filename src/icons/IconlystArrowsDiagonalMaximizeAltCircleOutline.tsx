import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalMaximizeAltCircleOutline = ({
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
      d="M11.52 8.5a.75.75 0 0 1 .75-.75h3.23a.75.75 0 0 1 .75.75v3.23a.75.75 0 0 1-1.5 0v-1.42l-1.345 1.345a.75.75 0 1 1-1.06-1.06l1.344-1.345h-1.42a.75.75 0 0 1-.75-.75M8.5 11.52a.75.75 0 0 1 .75.75v1.42l1.345-1.345a.75.75 0 1 1 1.06 1.06l-1.344 1.345h1.42a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75v-3.23a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalMaximizeAltCircleOutline;
