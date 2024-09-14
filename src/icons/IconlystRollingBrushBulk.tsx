import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRollingBrushBulk = ({
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
      d="M21.65 8.685c0 1.98-1.62 3.59-3.6 3.59h-3.79c-1.03 0-1.89.75-2.06 1.73a2.25 2.25 0 0 0-1.51-.02c.19-1.8 1.72-3.21 3.57-3.21h3.79c1.16 0 2.1-.94 2.1-2.09a2.1 2.1 0 0 0-1.7-2.05c.07-.25.1-.52.1-.79 0-.25-.03-.49-.08-.72 1.78.2 3.18 1.72 3.18 3.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.82 16.265v2.84c0 1.32-1.08 2.4-2.4 2.4s-2.39-1.08-2.39-2.4v-2.84c0-1.06.7-1.97 1.66-2.28a2.247 2.247 0 0 1 1.51.02 2.39 2.39 0 0 1 1.62 2.26M18.55 5.845c0 .27-.03.54-.1.79a3.336 3.336 0 0 1-3.24 2.55H6.69a3.34 3.34 0 0 1-3.34-3.34c0-1.85 1.49-3.35 3.34-3.35h8.52c1.59 0 2.93 1.12 3.26 2.63.05.23.08.47.08.72"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRollingBrushBulk;
