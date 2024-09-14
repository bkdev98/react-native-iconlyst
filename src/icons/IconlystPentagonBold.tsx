import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.23 8.935-6.418-4.66a3.06 3.06 0 0 0-3.623 0L3.77 8.935a3.08 3.08 0 0 0-1.12 3.45l2.452 7.538a3.07 3.07 0 0 0 2.93 2.137h7.933c1.34 0 2.52-.858 2.932-2.136l2.452-7.54a3.09 3.09 0 0 0-1.12-3.449"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPentagonBold;
