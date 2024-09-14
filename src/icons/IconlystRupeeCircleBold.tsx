import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.638 10.253a.75.75 0 0 1 0 1.5h-1.202a2.93 2.93 0 0 1-2.066 2.156l1.933 1.933a.749.749 0 1 1-1.061 1.06l-3.109-3.11a.75.75 0 0 1 .53-1.28h.933c.545 0 1.014-.31 1.254-.76H9.662a.75.75 0 0 1 0-1.5h2.082a1.42 1.42 0 0 0-1.043-.58H9.662a.75.75 0 0 1-.749-.755l-.001-.005a.75.75 0 0 1 .75-.75h.933c.036 0 .07.01.106.01h3.937a.75.75 0 0 1 0 1.5h-1.5q.154.275.246.58zM12 2.562c-5.238 0-9.5 4.26-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5c0-5.24-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRupeeCircleBold;
