import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveHexagonalBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.292 21c.598 0 1.172-.238 1.595-.662l3.952-3.95c.424-.424.661-1 .661-1.598V9.21c0-.599-.237-1.173-.66-1.596l-3.953-3.951A2.25 2.25 0 0 0 15.291 3H9.71c-.599 0-1.174.237-1.597.662l-3.951 3.95A2.26 2.26 0 0 0 3.5 9.21v5.582c0 .598.238 1.173.662 1.596l3.95 3.951A2.26 2.26 0 0 0 9.71 21h2.04M14.836 14.335l-4.67-4.67M12.5 11.998l-2.332 2.331M14.831 9.666l-.581.58"
    />
  </Svg>
);
export default IconlystRemoveHexagonalBroken;
