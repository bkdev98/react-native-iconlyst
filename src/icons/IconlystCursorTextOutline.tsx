import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCursorTextOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.75 12.926a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.75 4.926a.75.75 0 0 1 .75-.75 3.75 3.75 0 0 1 3.75 3.75v10a3.75 3.75 0 0 1-3.75 3.75.75.75 0 0 1 0-1.5 2.25 2.25 0 0 0 2.25-2.25v-10a2.25 2.25 0 0 0-2.25-2.25.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.75 7.926a3.75 3.75 0 0 1 3.75-3.75.75.75 0 0 1 0 1.5 2.25 2.25 0 0 0-2.25 2.25v10a2.25 2.25 0 0 0 2.25 2.25.75.75 0 0 1 0 1.5 3.75 3.75 0 0 1-3.75-3.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCursorTextOutline;
