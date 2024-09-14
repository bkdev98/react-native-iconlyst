import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainNeuralTwoTone = ({
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
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M9.313 19.315c.99.52 1.297 2.186 1.297 2.186" />
      <Path d="M19.306 21.264c-1.242-2.834-.57-5.797.885-8.401 1.04-1.863 1.27-3.86.39-5.886-1.307-3.014-4.461-4.404-7.591-4.474-1.877-.041-3.658.286-5.125 1.523-1.883 1.588-2.984 3.532-2.414 6.115.304 1.378-.702 2.942-1.414 3.9a.75.75 0 0 0 .334 1.174l.928.358a.83.83 0 0 1 .517.618l.31 2.644c.103.686.686 1.011 1.338.874l2.784-.628c.91-.2.871-1.024 1.109-1.886" />
    </G>
    <Circle
      cx={0.75}
      cy={0.75}
      r={0.75}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 17.637 6.842)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.295 8.135-1.158 1.223v1.468"
    />
    <Circle
      cx={0.75}
      cy={0.75}
      r={0.75}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 18.387 10.826)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.044 12.068-1.159 1.223v4.17"
    />
    <Circle
      cx={9.176}
      cy={7.592}
      r={0.75}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.767 8.135 1.158 1.223v1.468"
    />
    <Circle
      cx={8.175}
      cy={11.576}
      r={0.75}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.768 12.068 1.158 1.223v1.23M13.07 6.244v8.523"
    />
    <Circle
      cx={13.07}
      cy={5.494}
      r={0.75}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAiBrainNeuralTwoTone;
