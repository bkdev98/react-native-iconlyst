import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNetworkTwoTone = ({
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
      d="m13.715 15.504.72.982a1 1 0 0 0 .806.408h2.941"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.487 15.838a1.297 1.297 0 1 1-1.948 1.712 1.297 1.297 0 0 1 1.948-1.713"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.116 12.693 1.039-.067a1 1 0 0 0 .89-.7l.804-2.576"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.042 6.91a1.297 1.297 0 1 1 .698 2.498 1.297 1.297 0 0 1-.698-2.498"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.131 8.683.347-.777a1 1 0 0 0-.373-1.25l-2.453-1.574"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.307 4.29a1.297 1.297 0 1 1 2.594.014 1.297 1.297 0 0 1-2.594-.014"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.809 9.475-.936-.36a1 1 0 0 0-1.216.42l-1.35 2.248"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.487 14.162a1.297 1.297 0 1 1 0-2.594 1.297 1.297 0 0 1 0 2.594"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.747 14.426-.514.877a1 1 0 0 0-.03.956l1.084 2.146"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.706 20.36a1.297 1.297 0 1 1-2.238-1.312 1.297 1.297 0 0 1 2.238 1.311"
    />
    <Circle
      cx={12.496}
      cy={11.986}
      r={3.659}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAiNetworkTwoTone;
