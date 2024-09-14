import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst3DVideoBold = ({
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
      d="M14.631 15.18h-.811a.75.75 0 0 1-.75-.75V9.57a.75.75 0 0 1 .75-.75h.811A3.185 3.185 0 0 1 17.813 12a3.185 3.185 0 0 1-3.182 3.18m-4.912 0a2.24 2.24 0 0 1-1.592-.66.75.75 0 1 1 1.061-1.061.752.752 0 0 0 1.281-.529.75.75 0 0 0-.75-.75.75.75 0 0 1-.583-1.222l.516-.638H8.606a.75.75 0 0 1 0-1.5h2.618a.75.75 0 0 1 .583 1.221l-.829 1.025c.597.405.991 1.09.991 1.864 0 1.24-1.01 2.25-2.25 2.25M17.051 2.5H8.616c-3.159 0-5.282 2.223-5.282 5.531v7.939c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.031c0-3.308-2.123-5.531-5.283-5.531"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.63 10.32h-.06v3.36h.06c.929 0 1.683-.754 1.683-1.679 0-.927-.754-1.68-1.682-1.68"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst3DVideoBold;
