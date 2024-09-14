import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeBulk = ({
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
      d="M22.19 9.302 14.664 3.34a3.376 3.376 0 0 0-4.187.002L2.95 9.302a1.001 1.001 0 0 0 1.24 1.569l.127-.1v6.806c0 2.1 1.71 3.809 3.814 3.809h8.879a3.816 3.816 0 0 0 3.814-3.81v-6.805l.126.1a1 1 0 1 0 1.241-1.569"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.476 3.343a3.38 3.38 0 0 1 4.188 0L22.191 9.3a1 1 0 1 1-1.242 1.568l-7.525-5.957a1.38 1.38 0 0 0-1.708 0l-7.525 5.957A1 1 0 1 1 2.949 9.3zM16.515 14.676c-.98 1.287-2.418 2.025-3.945 2.025s-2.964-.738-3.946-2.025a.75.75 0 1 1 1.193-.91c.696.912 1.698 1.435 2.753 1.435 1.054 0 2.057-.523 2.752-1.434a.75.75 0 1 1 1.193.909"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeBulk;
