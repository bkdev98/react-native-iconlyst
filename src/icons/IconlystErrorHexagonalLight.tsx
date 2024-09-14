import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorHexagonalLight = ({
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
      d="M14.79 3H9.21c-.599 0-1.174.237-1.597.662l-3.951 3.95A2.26 2.26 0 0 0 3 9.21v5.582c0 .598.238 1.173.662 1.596l3.95 3.951A2.26 2.26 0 0 0 9.21 21h5.58c.6 0 1.174-.238 1.597-.662l3.952-3.95c.424-.424.661-1 .661-1.598V9.21c0-.599-.237-1.173-.66-1.596l-3.953-3.951A2.25 2.25 0 0 0 14.79 3M12 8.107V12m0 3.742v-.047"
    />
  </Svg>
);
export default IconlystErrorHexagonalLight;
