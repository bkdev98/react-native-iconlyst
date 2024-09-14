import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.328 8.805v4.562m2.322-2.28h-4.642M3.65 20c0-2.109 1.664-4.734 6.46-4.734 4.793 0 6.457 2.606 6.457 4.716M5.984 8.126a4.125 4.125 0 1 0 1.11-2.817"
    />
  </Svg>
);
export default IconlystAddUserBroken;
