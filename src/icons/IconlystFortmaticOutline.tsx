import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFortmaticOutline = ({
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
      d="M2.5 4c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v2.5a1.75 1.75 0 0 1-1.75 1.75H8.5V20a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 2.5 20zm1.75-.25A.25.25 0 0 0 4 4v16c0 .138.112.25.25.25h2.5A.25.25 0 0 0 7 20V7.5a.75.75 0 0 1 .75-.75h12.5a.25.25 0 0 0 .25-.25V4a.25.25 0 0 0-.25-.25z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.25 12.75A.25.25 0 0 0 13 13v2.5c0 .138.112.25.25.25h3.5a.75.75 0 0 1 .75.75v3.674a3.75 3.75 0 0 0 3-3.674V13a.25.25 0 0 0-.25-.25zM11.5 13c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75v3.5a5.25 5.25 0 0 1-5.25 5.25A.75.75 0 0 1 16 21v-3.75h-2.75a1.75 1.75 0 0 1-1.75-1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFortmaticOutline;
