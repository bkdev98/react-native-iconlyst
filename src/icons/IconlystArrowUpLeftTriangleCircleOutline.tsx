import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpLeftTriangleCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75A9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.888 7.888a.75.75 0 0 1 .697-.201l5.488 1.246a.75.75 0 0 1 .364 1.262l-1.59 1.59 3.266 3.267a.75.75 0 1 1-1.061 1.06l-3.266-3.265-1.591 1.59a.75.75 0 0 1-1.262-.364L7.687 8.584a.75.75 0 0 1 .201-.696m3.392 3.343-.049.049-1.136 1.136-.682-3.003 3.003.682z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpLeftTriangleCircleOutline;
