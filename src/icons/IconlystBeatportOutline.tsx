import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeatportOutline = ({
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
      d="M20.227 9.22a.75.75 0 0 1 .96.45 9.4 9.4 0 0 1 .563 3.218 9.4 9.4 0 0 1-.792 3.794.75.75 0 0 1-1.374-.602 7.9 7.9 0 0 0 .666-3.192c0-.951-.167-1.863-.473-2.707a.75.75 0 0 1 .45-.96M3.773 9.224a.75.75 0 0 1 .45.96 8 8 0 0 0-.473 2.708c0 1.136.238 2.216.666 3.192a.75.75 0 1 1-1.374.602 9.4 9.4 0 0 1-.792-3.794c0-1.129.199-2.212.562-3.218a.75.75 0 0 1 .96-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.76 9.128a5.317 5.317 0 0 0-7.52 7.519.75.75 0 0 1-1.06 1.06 6.817 6.817 0 1 1 9.64 0 .75.75 0 0 1-1.06-1.06 5.317 5.317 0 0 0 0-7.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeatportOutline;
