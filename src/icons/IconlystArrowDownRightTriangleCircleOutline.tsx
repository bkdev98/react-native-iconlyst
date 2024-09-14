import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownRightTriangleCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.888 7.887a.75.75 0 0 1 1.06 0l3.267 3.266 1.59-1.59a.75.75 0 0 1 1.263.364l1.246 5.489a.75.75 0 0 1-.898.897l-5.489-1.246a.75.75 0 0 1-.364-1.262l1.591-1.59-3.266-3.267a.75.75 0 0 1 0-1.06m4.833 4.882-1.136 1.136 3.002.682-.681-3.003-1.136 1.136z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownRightTriangleCircleOutline;
