import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNeuralNetworksTwoTone = ({
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
    <Circle
      cx={19.915}
      cy={4.771}
      r={1.585}
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
      d="M7.399 4.451h10.877"
      opacity={0.4}
    />
    <Circle
      cx={17.952}
      cy={18.88}
      r={1.585}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={1.321}
      cy={1.321}
      r={1.321}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 7.304 3.186)"
    />
    <Circle
      cx={1.585}
      cy={1.585}
      r={1.585}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 6.67 17.645)"
    />
    <Circle
      cx={19.056}
      cy={12.934}
      r={1.321}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={1.585}
      cy={1.585}
      r={1.585}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 11.742 11.021)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.344 11.4 7.279-5.671M11.386 13.727l5.163 4.316M6.308 18.086l11.426-4.994M17.814 12.162 7.153 5.232M9.357 11.15 6.62 5.873M8.747 13.674l-2.7 4.092"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAiNeuralNetworksTwoTone;
