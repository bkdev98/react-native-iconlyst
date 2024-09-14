import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiMonitorTwoTone = ({
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
      d="M17.47 3.283H7.529A4.03 4.03 0 0 0 3.5 7.313v5.456a4.03 4.03 0 0 0 4.028 4.029h9.943a4.03 4.03 0 0 0 4.029-4.03V7.313a4.03 4.03 0 0 0-4.03-4.029"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.383 16.8-.637 3.918M14.615 16.8l.637 3.918"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.555 20.717h9.888"
    />
    <G stroke={props.color} strokeWidth={1.5} opacity={0.4}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.02 13.115 2.69-6.148 2.767 6.148"
      />
      <Path d="M8.741 11.533h4.016" />
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.444 13.113V7.191"
      />
    </G>
  </Svg>
);
export default IconlystAiMonitorTwoTone;
