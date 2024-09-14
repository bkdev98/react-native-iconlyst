import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoopDirectionRepeatSquareVerticalOutline = ({
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
      d="M13.77 11.351a.75.75 0 0 1 1.06 0l2.486 2.486L19.8 11.35a.75.75 0 1 1 1.061 1.06l-3.015 3.017a.75.75 0 0 1-1.06 0l-3.017-3.016a.75.75 0 0 1 0-1.06M6.685 8.218c.199 0 .39.08.53.22l3.015 3.016a.75.75 0 0 1-1.06 1.06L6.685 10.03l-2.486 2.485a.75.75 0 0 1-1.06-1.06l3.015-3.016a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.941 6.055A3.805 3.805 0 0 1 9.747 2.25h4.513a3.806 3.806 0 0 1 3.805 3.805v8.781a.75.75 0 0 1-1.5 0v-8.78A2.305 2.305 0 0 0 14.26 3.75H9.747A2.305 2.305 0 0 0 7.44 6.055a.75.75 0 1 1-1.5 0M6.691 8.309a.75.75 0 0 1 .75.75v8.885a2.305 2.305 0 0 0 2.306 2.306h4.513a2.305 2.305 0 0 0 2.305-2.306.75.75 0 1 1 1.5 0 3.806 3.806 0 0 1-3.805 3.806H9.747a3.806 3.806 0 0 1-3.806-3.806V9.06a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLoopDirectionRepeatSquareVerticalOutline;
