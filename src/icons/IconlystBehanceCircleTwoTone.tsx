import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceCircleTwoTone = ({
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
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.258 12.935v.113a2.129 2.129 0 0 0 3.626 1.51m.268-1.622h-3.894v-.23a2.045 2.045 0 1 1 4.09 0v.034a.196.196 0 0 1-.196.196M7.5 11.97h1.809m0 0a1.616 1.616 0 0 0 0-3.232H7.313a.32.32 0 0 0-.323.321v5.822c0 .179.145.323.323.323H9.31a1.616 1.616 0 0 0 0-3.233"
    />
  </Svg>
);
export default IconlystBehanceCircleTwoTone;
