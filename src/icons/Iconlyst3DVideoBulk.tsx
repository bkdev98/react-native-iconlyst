import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3DVideoBulk = ({
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
      d="M17.051 2.5H8.616c-3.159 0-5.282 2.223-5.282 5.531v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.126 14.52c.426.426.991.66 1.592.66 1.24 0 2.25-1.01 2.25-2.25 0-.774-.393-1.459-.99-1.864l.829-1.025a.75.75 0 0 0-.584-1.22H8.606a.75.75 0 0 0 0 1.5h1.046l-.516.637a.75.75 0 0 0 .583 1.222c.414 0 .75.337.75.75a.752.752 0 0 1-1.28.53.75.75 0 1 0-1.062 1.06"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.63 15.18h-.81a.75.75 0 0 1-.75-.75V9.57a.75.75 0 0 1 .75-.75h.81A3.185 3.185 0 0 1 17.813 12a3.185 3.185 0 0 1-3.182 3.18m-.06-4.86h.06c.928 0 1.682.755 1.682 1.682 0 .925-.754 1.679-1.682 1.679h-.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3DVideoBulk;
