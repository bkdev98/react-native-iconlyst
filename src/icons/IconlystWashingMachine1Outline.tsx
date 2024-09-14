import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWashingMachine1Outline = ({
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
      d="M5.622 4.776c-.592.636-.954 1.57-.954 2.738v8.972c0 1.168.362 2.102.954 2.738.586.63 1.453 1.026 2.592 1.026h7.574c1.139 0 2.006-.397 2.592-1.026.591-.636.953-1.57.953-2.738V7.514c0-1.167-.363-2.102-.956-2.738-.588-.63-1.455-1.026-2.589-1.026H8.213c-1.139 0-2.005.397-2.591 1.026M4.524 3.754c.9-.966 2.18-1.504 3.689-1.504h7.575c1.505 0 2.785.538 3.686 1.504.895.96 1.36 2.282 1.36 3.76v8.972c0 1.477-.463 2.8-1.357 3.76-.9.966-2.18 1.504-3.689 1.504H8.214c-1.51 0-2.79-.538-3.69-1.504-.894-.96-1.356-2.283-1.356-3.76V7.514c0-1.477.462-2.8 1.356-3.76"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.787 6.03a.75.75 0 0 1 .75-.75h1.923a.75.75 0 0 1 0 1.5h-1.923a.75.75 0 0 1-.75-.75M3.166 8.482a.75.75 0 0 1 .75-.75h16.165a.75.75 0 0 1 0 1.5H3.916a.75.75 0 0 1-.75-.75M11.998 11.984a2.615 2.615 0 1 0 0 5.23 2.615 2.615 0 0 0 0-5.23M7.883 14.6a4.115 4.115 0 1 1 8.23 0 4.115 4.115 0 0 1-8.23 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.226 15.09a1.7 1.7 0 0 0-.976.548.75.75 0 0 1-1.125-.993 3.2 3.2 0 0 1 1.848-1.034h.003a3.15 3.15 0 0 1 2.34.537l.003.002c.304.217.469.292.717.292.247 0 .411-.075.715-.292l.004-.002a3.16 3.16 0 0 1 1.514-.566.75.75 0 0 1 .147 1.493 1.66 1.66 0 0 0-.795.298c-.396.282-.874.569-1.585.569-.712 0-1.19-.287-1.586-.57a1.65 1.65 0 0 0-1.224-.282"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWashingMachine1Outline;
