import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareClockBroken = ({
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
      d="M3.5 9v-.974C3.5 5.081 5.343 3 8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026V12M3.5 12v3.973C3.5 18.92 5.333 21 8.282 21h8.434c2.949 0 4.784-2.081 4.784-5.026v-1.246M12.5 4.476V3m0 16.524V21m7.524-9H21.5M4.976 12H3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.797 13.963-3.299-1.968V7.752"
    />
  </Svg>
);
export default IconlystSquareClockBroken;
