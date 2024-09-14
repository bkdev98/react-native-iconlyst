import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeuralNetworkTwoTone = ({
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
      d="M16.46 9.303a2.893 2.893 0 0 0 2.904-2.883"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.524 3.537a2.893 2.893 0 0 1 2.903 2.883c0 .506-.13.981-.361 1.395"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.52 6.556c.662.175 1.237.51 1.697.95"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.907 11.762a2.25 2.25 0 0 1-2.255-2.24c0-1.186.928-2.157 2.103-2.235a2.9 2.9 0 0 1-.134-.867c0-1.592 1.3-2.883 2.903-2.883.728 0 1.393.265 1.902.704a2.16 2.16 0 0 1 2.056-1.48c.965 0 1.782.629 2.06 1.495a2.9 2.9 0 0 1 1.919-.72 2.893 2.893 0 0 1 2.903 2.884q-.002.452-.133.862a2.247 2.247 0 0 1 2.22 2.24c0 1.237-1.009 2.24-2.254 2.24z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.353 9.27a.93.93 0 0 0 1.14-.654.92.92 0 0 0-.062-.643"
      opacity={0.4}
    />
    <Circle
      cx={12.552}
      cy={19.238}
      r={2}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(90 12.552 19.238)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.552 17.238v-2.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.402 20.234a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.152 14.242-2.58 2.89"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.702 20.234a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.952 14.242 2.58 2.89"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystNeuralNetworkTwoTone;
