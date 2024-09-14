import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleDashBroken = ({
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
      d="M3.726 9.547a9 9 0 0 0-.299 3.033M5.177 6.632A9 9 0 0 1 6.63 5.08M7.251 19.362a9 9 0 0 1-3.119-3.783M17.963 19.087a9.003 9.003 0 0 1-7.522 1.694M20.046 16.724a8.92 8.92 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.657M8.83 16.189c0-1.164.922-2.617 3.566-2.617 2.65 0 3.571 1.44 3.571 2.603M14.679 9.085a2.279 2.279 0 1 1-2.28-2.277"
    />
  </Svg>
);
export default IconlystUserCircleDashBroken;
