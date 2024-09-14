import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainMusicTwoTone = ({
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
      <Path d="M4.6 13.574c-1.256.642-1.913 4.298 3.205 4.602v1.723a.08.08 0 0 0 .077.08H9.57c.03 0 .058-.018.07-.047l1.197-2.83c.547.148 1.792.154 2.394-1.014 1.275 1.236 3.901.781 3.998-1.393" />
      <Path d="M21.69 9.521c1.252 1.865.763 4.149-.927 5.175-1.123.682-2.713.584-3.533 0a3.13 3.13 0 0 1-1.125-1.514M17.906 5.545c-.988-.582-2.876-1.742-5.308-1.488" />
      <Path d="M19.616 11.382c3.9-.993 1.236-7.724-3.457-5.291" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.6 9.56a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.199 7.96V4.021s.417 1.081 1.535 1.31M9.91 12.13a1.226 1.226 0 1 0 .001-2.452 1.226 1.226 0 0 0 0 2.452"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.135 10.904.001-3.5s.37.96 1.363 1.163"
    />
  </Svg>
);
export default IconlystAiBrainMusicTwoTone;
