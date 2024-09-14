import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine2Outline = ({
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
      d="M4.526 3.754c.9-.966 2.18-1.504 3.686-1.504h7.575c1.509 0 2.79.538 3.689 1.504.894.96 1.355 2.283 1.355 3.76v8.972c0 1.478-.461 2.8-1.355 3.76-.9.966-2.18 1.504-3.69 1.504H8.212c-1.509 0-2.79-.538-3.689-1.504-.894-.96-1.356-2.282-1.356-3.76V7.514c0-1.478.465-2.8 1.36-3.76m1.098 1.023c-.593.635-.957 1.57-.957 2.737v8.972c0 1.168.362 2.103.954 2.738.586.63 1.453 1.026 2.591 1.026h7.574c1.139 0 2.006-.397 2.592-1.026.592-.635.953-1.57.953-2.738V7.514c0-1.168-.361-2.102-.953-2.738-.586-.63-1.453-1.026-2.591-1.026H8.212c-1.134 0-2.001.396-2.588 1.027m2.26 9.823a4.116 4.116 0 1 1 8.232 0 4.116 4.116 0 0 1-8.232 0M12 11.984a2.616 2.616 0 1 0 0 5.232 2.616 2.616 0 0 0 0-5.232"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.226 15.09a1.7 1.7 0 0 0-.976.548.75.75 0 0 1-1.125-.993 3.2 3.2 0 0 1 1.848-1.034h.003a3.15 3.15 0 0 1 2.34.537l.003.002c.304.217.469.292.717.292.247 0 .411-.075.715-.292l.004-.002a3.16 3.16 0 0 1 1.514-.566.75.75 0 0 1 .147 1.493 1.66 1.66 0 0 0-.795.298c-.396.282-.874.569-1.585.569-.712 0-1.19-.287-1.586-.57a1.65 1.65 0 0 0-1.224-.282M3.168 8.481a.75.75 0 0 1 .75-.75h16.165a.75.75 0 1 1 0 1.5H3.918a.75.75 0 0 1-.75-.75M15.678 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M13.613 6.03a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M6.79 6.03a.75.75 0 0 1 .75-.75h1.923a.75.75 0 0 1 0 1.5H7.539a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWashingMachine2Outline;