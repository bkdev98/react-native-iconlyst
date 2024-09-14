import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUppercaseOutline = ({
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
      d="M8.178 6.66a.75.75 0 0 1 .688.45l4.679 10.709a.75.75 0 0 1-1.375.6L8.178 9.283l-3.99 9.136a.75.75 0 1 1-1.375-.6L7.49 7.109a.75.75 0 0 1 .687-.449M18.514 10.535a.75.75 0 0 1 .687.45l2.986 6.834a.75.75 0 1 1-1.374.6l-2.3-5.26-2.298 5.26a.75.75 0 0 1-1.375-.6l2.986-6.834a.75.75 0 0 1 .688-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.846 15.676a.75.75 0 0 1 .75-.75h3.836a.75.75 0 0 1 0 1.5h-3.836a.75.75 0 0 1-.75-.75M4.422 14.29a.75.75 0 0 1 .75-.75h6.011a.75.75 0 1 1 0 1.5H5.172a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUppercaseOutline;
