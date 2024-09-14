import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftSquareOutline = ({
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
      d="M2.25 12a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.53 8.47a.75.75 0 0 1 0 1.06L4.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0M17 10.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20 15.25h-3a1.75 1.75 0 0 1-1.75-1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowLeftSquareOutline;
