import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCodeOutline = ({
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
      d="M16.919 20.084a.75.75 0 0 1-.386-1.393c.117-.073 2.969-1.884 2.969-6.691s-2.852-6.618-2.973-6.693a.75.75 0 0 1 .775-1.284c.15.09 3.7 2.284 3.7 7.977s-3.547 7.887-3.7 7.977a.74.74 0 0 1-.385.107M7.58 20.084a.75.75 0 0 1-.383-.107c-.15-.09-3.7-2.284-3.7-7.977s3.546-7.887 3.7-7.977a.75.75 0 0 1 .775 1.284C7.843 5.386 5 7.2 5 12s2.851 6.618 2.972 6.693a.75.75 0 0 1-.392 1.391"
    />
  </Svg>
);
export default IconlystCodeOutline;
