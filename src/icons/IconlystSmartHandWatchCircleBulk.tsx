import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartHandWatchCircleBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M7.297 3.355A2.66 2.66 0 0 1 9.898 1.25h4.163c1.257 0 2.343.881 2.6 2.112l.724 3.445a.75.75 0 1 1-1.468.309l-.723-3.446a1.16 1.16 0 0 0-1.134-.92H9.898a1.16 1.16 0 0 0-1.134.918l-.681 3.18a.75.75 0 0 1-1.467-.314zM7.297 20.645a2.66 2.66 0 0 0 2.601 2.104h4.163c1.257 0 2.343-.88 2.6-2.111l.724-3.446a.75.75 0 0 0-1.468-.308l-.723 3.445c-.113.536-.585.92-1.134.92H9.898a1.16 1.16 0 0 1-1.134-.918l-.681-3.18a.75.75 0 0 0-1.467.315z" />
    </G>
    <Path
      fill={props.color}
      d="M12 4.54a7.46 7.46 0 0 0 0 14.92 7.46 7.46 0 1 0 0-14.92"
    />
  </Svg>
);
export default IconlystSmartHandWatchCircleBulk;
