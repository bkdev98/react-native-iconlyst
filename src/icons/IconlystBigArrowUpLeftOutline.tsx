import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowUpLeftOutline = ({
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
      d="M9.434 3.252c1.564.001 3.126.003 4.697-.001 1.897-.005 2.869 2.295 1.52 3.645l-1.601 1.6 5.237 5.238c.831.83.831 2.178 0 3.008l-2.546 2.547c-.831.83-2.178.83-3.009 0l-5.237-5.237-1.605 1.604c-1.346 1.347-3.644.382-3.64-1.515q.004-2.634.001-5.269V5.374c0-1.17.947-2.12 2.119-2.123q2.038-.001 4.064 0m-.01 1.5q-2.031-.004-4.052 0a.623.623 0 0 0-.622.623l.001 3.492q.003 2.64 0 5.278a.634.634 0 0 0 1.078.45l1.76-1.76c.5-.5 1.31-.5 1.81 0l5.394 5.393a.627.627 0 0 0 .887 0l2.547-2.546a.627.627 0 0 0 0-.887L12.833 9.4c-.5-.5-.5-1.31 0-1.81l1.757-1.756c.396-.395.114-1.086-.455-1.084-1.565.004-3.138.002-4.71 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowUpLeftOutline;
