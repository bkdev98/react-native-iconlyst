import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenRightOutline = ({
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
      d="M11.896 8.417a.75.75 0 0 1 1.06-.002l3.031 3.02a.75.75 0 0 1 0 1.064l-3.03 3.017a.75.75 0 0 1-1.06-1.063l1.745-1.736H3.034a.75.75 0 0 1 0-1.5h10.609l-1.745-1.74a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.764 6.692a9.74 9.74 0 0 1 8.202-4.476c5.384 0 9.75 4.365 9.75 9.75s-4.366 9.75-9.75 9.75a9.74 9.74 0 0 1-8.202-4.476.75.75 0 0 1 1.261-.812 8.25 8.25 0 1 0 0-8.924.75.75 0 1 1-1.26-.812"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenRightOutline;
