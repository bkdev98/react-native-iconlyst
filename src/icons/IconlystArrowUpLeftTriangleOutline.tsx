import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpLeftTriangleOutline = ({
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
      d="M5.812 5.813a.75.75 0 0 1 .696-.201l8.668 1.967a.75.75 0 0 1 .364 1.262l-2.82 2.82 5.465 5.466a.75.75 0 0 1-1.06 1.06l-5.466-5.465L8.84 15.54a.75.75 0 0 1-1.261-.365L5.61 6.51a.75.75 0 0 1 .201-.696m5.338 5.297-.042.042-2.367 2.367-1.404-6.181 6.181 1.403z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpLeftTriangleOutline;
