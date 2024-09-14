import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCloseOutline = ({
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
      fillRule="evenodd"
      d="M11.882 3.75a7.668 7.668 0 1 0 .001 15.335 7.668 7.668 0 0 0-.001-15.335m6.787 13.83a9.14 9.14 0 0 0 2.38-6.163 9.167 9.167 0 0 0-9.167-9.167 9.167 9.167 0 0 0-9.167 9.167 9.168 9.168 0 0 0 14.858 7.188l2.932 2.926a.75.75 0 1 0 1.06-1.062zM9.652 9.188a.75.75 0 0 1 1.06 0l1.17 1.169 1.168-1.169a.75.75 0 1 1 1.06 1.06l-1.168 1.17 1.168 1.168a.75.75 0 0 1-1.06 1.06l-1.169-1.168-1.168 1.168a.75.75 0 0 1-1.06-1.06l1.168-1.169-1.169-1.168a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCloseOutline;
