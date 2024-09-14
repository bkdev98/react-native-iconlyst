import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6Outline = ({
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
      d="M18.589 19.336H5.412a3.05 3.05 0 0 1-1.169-5.847l5.206-2.2a.75.75 0 0 1 .584 1.382l-5.206 2.2a1.5 1.5 0 0 0-.915 1.38 1.52 1.52 0 0 0 1.5 1.585h13.177a1.5 1.5 0 0 0 .574-2.885l-7.433-3.075a.75.75 0 0 1-.462-.7v-.478a1.96 1.96 0 0 1 1.265-1.821 1.407 1.407 0 0 0 .832-1.724 1.36 1.36 0 0 0-.946-.934 1.412 1.412 0 0 0-1.802 1.35.75.75 0 1 1-1.5 0 2.88 2.88 0 0 1 1.134-2.3 2.91 2.91 0 0 1 3.815.228c.351.347.608.779.744 1.254a2.92 2.92 0 0 1-1.73 3.523.47.47 0 0 0-.31.4l6.965 2.883a3 3 0 0 1-1.148 5.77z"
    />
    <Path
      fill={props.color}
      d="M21 8.314h-6.736a.75.75 0 1 1 0-1.5H21a.75.75 0 1 1 0 1.5m-13.688 0H3a.75.75 0 1 1 0-1.5h4.312a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystCoatHanger6Outline;
