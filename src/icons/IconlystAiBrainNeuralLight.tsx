import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainNeuralLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.664 14.693c.097 2.175 2.723 2.63 3.997 1.394.603 1.167 1.848 1.162 2.395 1.013l1.196 2.83c.012.03.04.049.07.049h1.689a.08.08 0 0 0 .077-.081v-1.723c2.208-.132 3.34-.887 3.815-1.755.257-.472.32-.977.255-1.433"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.202 9.521c-1.251 1.865-.762 4.149.927 5.175 1.123.682 2.713.584 3.534 0 .852-.606 1.334-1.653 1.255-2.478M6.986 5.546c.76-.447 2.05-1.236 3.71-1.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.277 11.382c-3.9-.993-1.236-7.724 3.457-5.291"
    />
    <Circle
      cx={11.847}
      cy={7.769}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 21.953 6.355)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.656 8.79 1.38 1.38v2.858M19.864 8.387l-1.137 1.042v3.283M16.283 4.322v6.17"
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 17.533 2.021)"
    />
  </Svg>
);
export default IconlystAiBrainNeuralLight;
