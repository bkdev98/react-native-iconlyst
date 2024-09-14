import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRollingBrushBold = ({
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
      d="M17.97 5.634a3.34 3.34 0 0 0-3.26-2.63H6.19c-1.85 0-3.34 1.5-3.34 3.35a3.34 3.34 0 0 0 3.34 3.34h8.52c1.57 0 2.89-1.09 3.24-2.55a2.1 2.1 0 0 1 1.7 2.05c0 1.15-.94 2.09-2.1 2.09h-3.79c-1.85 0-3.38 1.41-3.57 3.21-.96.31-1.66 1.22-1.66 2.28v2.84c0 1.32 1.07 2.4 2.39 2.4s2.4-1.08 2.4-2.4v-2.84c0-1.05-.68-1.94-1.62-2.26.17-.98 1.03-1.73 2.06-1.73h3.79c1.98 0 3.6-1.61 3.6-3.59 0-1.84-1.4-3.36-3.18-3.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRollingBrushBold;
