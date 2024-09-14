import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCheckBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.367 12.996 1.728 1.727 3.537-3.536"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.374 12.798V6.657A3.746 3.746 0 0 1 8.134 3h5.652c.557 0 1.092.227 1.478.63l3.791 3.95c.367.38.571.89.571 1.42v8.163A3.81 3.81 0 0 1 15.97 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V16.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.269 5.953a2.56 2.56 0 0 0 2.554 2.56h2.738"
    />
  </Svg>
);
export default IconlystDcoumentCheckBroken;
