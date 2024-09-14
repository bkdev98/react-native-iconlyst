import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpRightTriangleOutline = ({
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
      d="M18.186 5.813a.75.75 0 0 1 .201.696l-1.967 8.667a.75.75 0 0 1-1.262.365l-2.819-2.82-5.465 5.466a.75.75 0 1 1-1.061-1.06l5.465-5.466-2.82-2.82a.75.75 0 0 1 .365-1.262l8.667-1.967a.75.75 0 0 1 .696.2m-5.296 5.339-.042-.042-2.368-2.369 6.181-1.403-1.403 6.181z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpRightTriangleOutline;
