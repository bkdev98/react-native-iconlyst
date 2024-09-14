import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowDownRightOutline = ({
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
      d="M9.732 7.07c.66-.661 1.732-.661 2.392 0l3.436 3.435 2.057-2.057c.745-.745 2.02-.26 2.082.792l.542 9.214a1.69 1.69 0 0 1-1.788 1.787L9.24 19.7c-1.051-.061-1.536-1.337-.791-2.081l2.057-2.058-3.436-3.435a1.69 1.69 0 0 1 0-2.392zm1.332 1.06a.19.19 0 0 0-.271 0L8.13 10.793a.19.19 0 0 0 0 .271l3.966 3.966a.75.75 0 0 1 0 1.06l-2.148 2.148 8.593.506a.192.192 0 0 0 .203-.202l-.506-8.594-2.148 2.148a.75.75 0 0 1-1.06 0zM9.006 3.976a.75.75 0 0 1 0 1.06l-3.97 3.97a.75.75 0 0 1-1.06-1.061l3.969-3.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowDownRightOutline;
