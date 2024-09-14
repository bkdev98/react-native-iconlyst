import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownRightTriangleOutline = ({
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
      d="M5.811 5.813a.75.75 0 0 1 1.061 0l5.466 5.466 2.82-2.82a.75.75 0 0 1 1.261.364l1.968 8.667a.75.75 0 0 1-.897.898L8.822 16.42a.75.75 0 0 1-.364-1.262l2.819-2.819L5.81 6.874a.75.75 0 0 1 0-1.06m7.036 7.078-2.367 2.367 6.18 1.403-1.402-6.18-2.37 2.368z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownRightTriangleOutline;
