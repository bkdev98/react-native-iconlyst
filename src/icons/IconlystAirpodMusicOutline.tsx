import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodMusicOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.9 3.698c1.012.924 1.713 2.239 1.713 3.689v10.287a2.334 2.334 0 0 1-4.667 0v-5.598h-.393a5.23 5.23 0 0 1-4.148-2.042 2.85 2.85 0 0 1-.563-1.725V5.93c0-.602.179-1.218.564-1.726a4.92 4.92 0 0 1 3.676-1.949h.003c1.43-.066 2.804.518 3.816 1.443m-3.744.055c.978-.044 1.975.36 2.733 1.052.757.692 1.224 1.624 1.224 2.582v10.287a.834.834 0 0 1-1.667 0v-6.348a.75.75 0 0 0-.75-.75h-1.143a3.73 3.73 0 0 1-2.953-1.45 1.35 1.35 0 0 1-.258-.817V5.93c0-.31.093-.6.26-.819V5.11a3.42 3.42 0 0 1 2.554-1.357M7.639 5.145V5.14l-.002-.002.002.005m-.002-.006.007.015q.01.027.041.083c.04.076.105.18.195.29.18.221.436.43.793.503a.75.75 0 1 1-.3 1.47 2.8 2.8 0 0 1-.684-.236v2.214a2.4 2.4 0 1 1-4.801 0 2.4 2.4 0 0 1 3.301-2.226V5.414a.75.75 0 0 1 1.448-.275M6.19 9.479a.9.9 0 1 0-1.801-.002.9.9 0 0 0 1.801.001m9.305-3.737a.75.75 0 0 1 .75.75v1.387a.75.75 0 0 1-1.5 0V6.492a.75.75 0 0 1 .75-.75m-4.819 7.816v4.662a3.53 3.53 0 1 1-1.5-2.888v-3.958a.75.75 0 0 1 1.449-.272v.002h.001v-.002l.001.006.018.04a3.642 3.642 0 0 0 .467.742c.352.432.879.872 1.63 1.024a.75.75 0 1 1-.299 1.47 4.15 4.15 0 0 1-1.767-.826m-1.5 4.662a2.03 2.03 0 1 0-4.06 0 2.03 2.03 0 0 0 4.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodMusicOutline;
