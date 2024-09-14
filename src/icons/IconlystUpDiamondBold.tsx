import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpDiamondBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.322 12.069a.75.75 0 0 1-1.061-.002L12.75 10.55v5.348a.75.75 0 0 1-1.5 0v-5.35l-1.51 1.519a.751.751 0 0 1-1.065-1.06l2.791-2.803a.75.75 0 0 1 .824-.16c.062.026.112.069.164.11.024.019.053.029.075.05h.001l2.794 2.804a.75.75 0 0 1-.002 1.06m4.801-2.921-4.958-4.959c-1.893-1.892-4.495-1.834-6.474.143L4.02 9.005c-.95.95-1.476 2.064-1.517 3.218-.043 1.189.432 2.315 1.373 3.255l4.958 4.958c.923.923 2.013 1.383 3.118 1.383 1.163 0 2.342-.51 3.356-1.525l4.672-4.673c.951-.95 1.476-2.063 1.517-3.218.042-1.188-.433-2.314-1.374-3.255"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpDiamondBold;
