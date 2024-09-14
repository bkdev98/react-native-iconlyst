import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralNetworksLight = ({
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
      d="M9.538 21.067V12.06a.68.68 0 0 0-.144-.417L7.977 9.824"
    />
    <Circle
      cx={1.048}
      cy={1.048}
      r={1.048}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 8.21 7.914)"
    />
    <Circle
      cx={1.048}
      cy={1.048}
      r={1.048}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 5.096 13.125)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 19.05v-3.237a.495.495 0 0 0-.313-.46l-1.646-.847M14.461 21.067V12.06c0-.151.05-.298.144-.417l1.418-1.818"
    />
    <Circle
      cx={16.838}
      cy={8.962}
      r={1.048}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={19.952}
      cy={14.173}
      r={1.048}
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
      d="M17 19.05v-3.237c0-.203.124-.385.313-.46l1.646-.847M12 6.11v12.958"
    />
    <Circle
      cx={12}
      cy={4.981}
      r={1.048}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAiNeuralNetworksLight;
