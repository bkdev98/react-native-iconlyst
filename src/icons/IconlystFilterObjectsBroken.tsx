import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterObjectsBroken = ({
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
      d="M3.98 15.75c0-1.09.771-1.77 1.86-1.77h2.941c1.09 0 1.86.682 1.86 1.77v3.12c0 1.092-.77 1.77-1.86 1.77h-2.94c-1.09 0-1.86-.678-1.86-1.77M18.403 20.887a3.577 3.577 0 1 1 3.167-1.914M16.157 8.606a.828.828 0 0 1-.72 1.238H9.619a.828.828 0 0 1-.717-1.242l2.928-5.075a.829.829 0 0 1 1.437.004l1.217 2.138"
    />
  </Svg>
);
export default IconlystFilterObjectsBroken;
