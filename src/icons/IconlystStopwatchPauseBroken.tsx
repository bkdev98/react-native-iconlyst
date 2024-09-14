import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPauseBroken = ({
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
      d="M16.406 16.76v3.68M19.246 16.76v3.68M12.49 13.31l2.942-2.94M10.397 3h4.207M20.086 13.293a7.63 7.63 0 0 0-14.2-3.878M12.457 20.922a7.63 7.63 0 0 1-7.629-7.629"
    />
  </Svg>
);
export default IconlystStopwatchPauseBroken;
