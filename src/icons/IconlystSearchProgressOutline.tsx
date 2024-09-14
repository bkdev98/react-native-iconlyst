import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchProgressOutline = ({
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
      d="M11.882 3.75a7.668 7.668 0 1 0 5.191 13.31l.008-.006.049-.045A7.667 7.667 0 0 0 11.883 3.75m6.788 13.83a9.14 9.14 0 0 0 2.38-6.162 9.167 9.167 0 0 0-9.168-9.168 9.167 9.167 0 0 0-9.167 9.168 9.168 9.168 0 0 0 14.859 7.188l2.933 2.925a.75.75 0 1 0 1.06-1.062zM8.425 8.542a.75.75 0 0 1 .75-.75h.377a.75.75 0 0 1 0 1.5h-.377a.75.75 0 0 1-.75-.75m2.575 0a.75.75 0 0 1 .75-.75h3.207a.75.75 0 0 1 0 1.5H11.75a.75.75 0 0 1-.75-.75M7.277 11.54a.75.75 0 0 1 .75-.75h8.078a.75.75 0 0 1 0 1.5H8.027a.75.75 0 0 1-.75-.75m1.148 2.997a.75.75 0 0 1 .75-.75h3.22a.75.75 0 0 1 0 1.5h-3.22a.75.75 0 0 1-.75-.75m5.417 0a.75.75 0 0 1 .75-.75h.364a.75.75 0 1 1 0 1.5h-.364a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchProgressOutline;
