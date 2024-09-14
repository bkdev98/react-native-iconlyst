import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownLeftTriangleOutline = ({
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
      d="M18.187 5.813a.75.75 0 0 1 0 1.061L12.72 12.34l2.819 2.818a.75.75 0 0 1-.364 1.262l-8.668 1.968a.75.75 0 0 1-.897-.898l1.968-8.667a.75.75 0 0 1 1.261-.364l2.82 2.82 5.466-5.466a.75.75 0 0 1 1.06 0m-7.078 7.036L8.741 10.48l-1.404 6.181 6.181-1.403-2.367-2.367z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownLeftTriangleOutline;
