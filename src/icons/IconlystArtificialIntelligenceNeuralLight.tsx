import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArtificialIntelligenceNeuralLight = ({
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
      d="M12 4.12 9.256 3l-4.17 2.729v3.003L3 9.804v4.393l2.085 1.07v3L9.256 21 12 19.875M12 18.125v1.755L14.744 21l4.17-2.729v-3.003L21 14.196V9.803l-2.085-1.07v-3L14.744 3 12 4.125v1.75M12 11.525v8.315"
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 10.936 11.525)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.94 13.973-1.186 2.208v4.668"
    />
    <Circle
      cx={1.15}
      cy={1.15}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 15.465 14.145)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.06 13.973 1.186 2.208v4.668"
    />
    <Circle
      cx={7.385}
      cy={12.995}
      r={1.15}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(180 7.385 12.995)"
    />
  </Svg>
);
export default IconlystArtificialIntelligenceNeuralLight;
