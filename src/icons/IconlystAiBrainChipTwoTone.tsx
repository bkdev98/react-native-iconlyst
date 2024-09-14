import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainChipTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M8.164 14.693c.097 2.175 2.723 2.63 3.997 1.394.603 1.167 1.848 1.162 2.395 1.013l1.196 2.83c.012.03.04.049.07.049h1.689a.08.08 0 0 0 .077-.081v-1.723c3.382-.201 4.242-1.867 4.074-3.158" />
      <Path d="M3.702 9.521c-1.251 1.865-.762 4.149.927 5.175 1.123.682 2.713.584 3.534 0a3.13 3.13 0 0 0 1.125-1.514M7.486 5.546c.735-.433 1.967-1.186 3.55-1.439" />
      <Path d="M5.777 11.382c-3.9-.993-1.236-7.724 3.457-5.291" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.533 9.676c0 .887.555 1.517 1.446 1.517h2.547c.89 0 1.443-.63 1.443-1.517v-2.4c0-.891-.552-1.52-1.443-1.52h-2.547c-.888 0-1.446.629-1.446 1.52zM19.97 7.352h1.74M19.97 9.596h1.74M12.794 7.352h1.74M12.794 9.596h1.74M18.375 11.192v1.74M16.13 11.192v1.74M18.375 4.016v1.74M16.13 4.016v1.74"
    />
  </Svg>
);
export default IconlystAiBrainChipTwoTone;
