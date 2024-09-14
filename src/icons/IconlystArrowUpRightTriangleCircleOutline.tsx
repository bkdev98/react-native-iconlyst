import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRightTriangleCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.113 7.887a.75.75 0 0 1 .2.696l-1.245 5.49a.75.75 0 0 1-1.262.364l-1.59-1.591-3.267 3.266a.75.75 0 1 1-1.06-1.06l3.265-3.267-1.59-1.591a.75.75 0 0 1 .363-1.262l5.49-1.246a.75.75 0 0 1 .696.201M12.77 11.28l-.049-.049-1.136-1.136 3.002-.682-.681 3.003z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRightTriangleCircleOutline;
