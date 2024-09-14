import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowRightUpOutline = ({
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
      d="M18.453 3.759a1.69 1.69 0 0 1 1.788 1.788l-.542 9.214c-.062 1.051-1.337 1.536-2.082.791l-2.057-2.057-3.436 3.436c-.66.66-1.731.66-2.392 0L7.07 14.268a1.69 1.69 0 0 1 0-2.392l3.436-3.436-2.057-2.057c-.745-.745-.26-2.02.791-2.082zm.29 1.7a.19.19 0 0 0-.202-.203l-8.593.506 2.148 2.148a.75.75 0 0 1 0 1.06L8.13 12.936a.19.19 0 0 0 0 .271l2.663 2.663a.19.19 0 0 0 .27 0l3.967-3.966a.75.75 0 0 1 1.06 0l2.148 2.148zM3.976 14.995a.75.75 0 0 1 1.06 0l3.97 3.969a.75.75 0 0 1-1.061 1.06l-3.97-3.969a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowRightUpOutline;
