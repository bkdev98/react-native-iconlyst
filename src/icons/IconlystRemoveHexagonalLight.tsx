import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveHexagonalLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.792 3H9.21c-.599 0-1.174.237-1.597.662l-3.951 3.95A2.26 2.26 0 0 0 3 9.21v5.582c0 .598.238 1.173.662 1.596l3.95 3.951A2.26 2.26 0 0 0 9.21 21h5.581c.599 0 1.173-.238 1.596-.662l3.952-3.95c.424-.424.661-1 .661-1.598V9.21c0-.599-.237-1.173-.66-1.596l-3.953-3.951A2.25 2.25 0 0 0 14.791 3M14.33 9.666 9.668 14.33m4.668.006-4.67-4.67"
    />
  </Svg>
);
export default IconlystRemoveHexagonalLight;
