import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarGlowingBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.521 19.439 1-1M18.52 19.416l-1-1M5.498 6.438l1 1M18.5 6.416l-1.002 1M12 20.916v1M12 3.916v1M4.045 12.916H3M21 12.916h-1.045M9.477 15.862a.516.516 0 0 0 .75.537l1.533-.795a.53.53 0 0 1 .482 0l1.532.795a.515.515 0 0 0 .75-.537l-.294-1.683a.5.5 0 0 1 .149-.452l1.24-1.191a.508.508 0 0 0-.285-.87l-1.716-.246a.52.52 0 0 1-.39-.28l-.765-1.532a.521.521 0 0 0-.924 0l-.768 1.533a.52.52 0 0 1-.39.279l-1.715.247a.508.508 0 0 0-.286.869l1.242 1.191"
    />
  </Svg>
);
export default IconlystStarGlowingBroken;
