import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTopSideBulk = ({
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
      d="M2.8 9.291a.3.3 0 0 0-.3.3v6.625c0 3.16 2.22 5.284 5.526 5.284h7.947c3.306 0 5.527-2.123 5.527-5.283V9.591a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.2 7.782a.29.29 0 0 0 .293-.3c-.136-2.993-2.32-4.982-5.52-4.982H8.027c-3.2 0-5.383 1.99-5.52 4.982a.29.29 0 0 0 .294.3zM15.114 16.198a.75.75 0 0 1-1.061-.04L12 13.946l-2.054 2.212a.75.75 0 0 1-1.061.04.75.75 0 0 1-.039-1.06l2.604-2.804a.75.75 0 0 1 1.1 0l2.603 2.804a.75.75 0 0 1-.039 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTopSideBulk;
