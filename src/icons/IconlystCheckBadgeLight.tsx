import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckBadgeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.99 7.19a2.2 2.2 0 0 1 2.2-2.2h1c.58 0 1.137-.23 1.55-.639l.698-.7a2.2 2.2 0 0 1 3.112-.01v.001l.01.008.7.7c.41.41.968.64 1.549.64h1.002a2.2 2.2 0 0 1 2.2 2.199v1c0 .581.23 1.138.64 1.55l.7.7a2.2 2.2 0 0 1 .01 3.111l-.71.71c-.41.412-.639.969-.639 1.549v1.003a2.2 2.2 0 0 1-2.2 2.196h-1.005c-.58 0-1.138.23-1.55.64l-.7.7a2.2 2.2 0 0 1-3.109.013l-.003-.002-.708-.708a2.2 2.2 0 0 0-1.55-.64H7.19a2.2 2.2 0 0 1-2.199-2.199v-1.005c0-.58-.23-1.137-.64-1.549l-.699-.7a2.2 2.2 0 0 1-.015-3.108l.004-.004.708-.709c.41-.411.64-.969.64-1.55V7.19"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.004 12.122 1.977 1.98 4.073-4.075"
    />
  </Svg>
);
export default IconlystCheckBadgeLight;
