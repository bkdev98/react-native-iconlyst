import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOven2Outline = ({
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
      d="M4.527 3.754c.9-.966 2.18-1.504 3.686-1.504h7.575c1.509 0 2.79.538 3.689 1.504.894.96 1.355 2.283 1.355 3.76v8.972c0 1.478-.461 2.8-1.355 3.76-.9.966-2.18 1.504-3.69 1.504H8.213c-1.509 0-2.79-.538-3.689-1.504-.894-.96-1.356-2.282-1.356-3.76V7.514c0-1.478.465-2.8 1.36-3.76m1.098 1.023c-.593.635-.957 1.57-.957 2.737v8.972c0 1.168.362 2.103.954 2.738.586.63 1.453 1.026 2.591 1.026h7.574c1.139 0 2.006-.397 2.592-1.026.592-.635.953-1.57.953-2.738V7.514c0-1.168-.361-2.102-.953-2.738-.586-.63-1.453-1.026-2.591-1.026H8.213c-1.134 0-2.001.396-2.588 1.027"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.475 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M15.025 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M11.25 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75M3.168 8.481a.75.75 0 0 1 .75-.75h16.165a.75.75 0 1 1 0 1.5H3.918a.75.75 0 0 1-.75-.75M8.18 12.677a.75.75 0 0 1 .75-.75h6.147a.75.75 0 0 1 0 1.5H8.93a.75.75 0 0 1-.75-.75m-.004 3.503a.75.75 0 0 1 .75-.75h6.152a.75.75 0 0 1 0 1.5H8.926a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOven2Outline;
