import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainSleepTwoTone = ({
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
      <Path d="M3.888 13.574c-1.255.642-1.911 4.298 3.206 4.602v1.723a.08.08 0 0 0 .077.08H8.86c.03 0 .058-.018.07-.047l1.197-2.83c.547.148 1.792.154 2.394-1.014 1.275 1.236 3.901.781 3.998-1.393" />
      <Path d="M20.98 9.521c1.25 1.865.762 4.149-.928 5.175-1.122.682-2.713.584-3.533 0a3.13 3.13 0 0 1-1.125-1.514M17.195 5.545c-.988-.582-2.876-1.742-5.308-1.488" />
      <Path d="M18.905 11.382c3.9-.993 1.236-7.724-3.457-5.291M16.419 9.113c-.251.412-1.077.642-1.812.434" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.683 4.418h2.701l-2.701 2.98h2.701M7.812 7.414h2.88l-2.88 3.178h2.88"
    />
  </Svg>
);
export default IconlystAiBrainSleepTwoTone;
