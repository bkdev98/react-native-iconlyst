import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSideBulk = ({
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
      d="M9.291 21.2a.3.3 0 0 0 .3.3h6.625c3.16 0 5.284-2.22 5.284-5.526V8.027c0-3.306-2.123-5.527-5.283-5.527H9.591a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.782 2.8a.29.29 0 0 0-.3-.294C4.489 2.643 2.5 4.826 2.5 8.026v7.947c0 3.2 1.99 5.383 4.982 5.52a.29.29 0 0 0 .3-.294zM16.198 8.885a.75.75 0 0 1-.04 1.061L13.946 12l2.212 2.054c.304.281.32.757.04 1.061a.75.75 0 0 1-1.06.04l-2.804-2.604a.75.75 0 0 1 0-1.1l2.804-2.604a.75.75 0 0 1 1.06.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftSideBulk;
