import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp2Outlinecurved = ({
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
      d="M4.25 15.5c0-.13.033-.262.104-.382C4.8 14.364 8.809 7.75 12 7.75s7.199 6.613 7.646 7.368a.75.75 0 1 1-1.292.764C16.834 13.318 13.767 9.25 12 9.25c-1.77 0-4.837 4.068-6.354 6.632A.75.75 0 0 1 4.25 15.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp2Outlinecurved;
