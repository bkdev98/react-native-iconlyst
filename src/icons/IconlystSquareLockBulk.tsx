import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLockBulk = ({
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
      d="M16.217 2.5H7.783C4.623 2.5 2.5 4.719 2.5 8.02v7.95c0 3.307 2.123 5.53 5.283 5.53h8.433c3.16 0 5.284-2.223 5.284-5.53V8.02c0-3.301-2.123-5.52-5.283-5.52"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.158 10.608a2.158 2.158 0 0 0-4.315 0c0 .712.349 1.336.88 1.732l-.668 2.014a.91.91 0 0 0 .87 1.196h2.152a.91.91 0 0 0 .868-1.196l-.669-2.014c.532-.396.882-1.02.882-1.732"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLockBulk;
