import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightSquareBoldcurved = ({
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
      d="M12.987 16.371a.746.746 0 0 1-1.04-.206.75.75 0 0 1 .206-1.04c1.182-.792 2.282-1.707 2.907-2.375h-6.9a.75.75 0 0 1 0-1.5h6.902c-.63-.668-1.743-1.597-2.91-2.379a.75.75 0 1 1 .836-1.246c1.233.827 4.102 2.909 4.102 4.375s-2.87 3.545-4.103 4.371M12.25 2.25C5.051 2.25 2.5 4.802 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightSquareBoldcurved;
