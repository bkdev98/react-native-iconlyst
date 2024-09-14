import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiNetworkLight = ({
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
      d="m13.215 15.504.72.982a1 1 0 0 0 .806.408h2.941"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.987 15.838a1.297 1.297 0 1 1-1.948 1.712 1.297 1.297 0 0 1 1.948-1.713M15.616 12.693l1.039-.067a1 1 0 0 0 .89-.7l.804-2.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.542 6.91a1.297 1.297 0 1 1 .698 2.498 1.297 1.297 0 0 1-.698-2.498M13.631 8.683l.347-.777a1 1 0 0 0-.373-1.25l-2.453-1.574"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.807 4.29a1.297 1.297 0 1 1 2.594.014 1.297 1.297 0 0 1-2.594-.014M9.309 9.475l-.936-.36a1 1 0 0 0-1.216.42l-1.35 2.248"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.987 14.162a1.297 1.297 0 1 1 0-2.594 1.297 1.297 0 0 1 0 2.594M9.247 14.426l-.514.877a1 1 0 0 0-.03.956l1.084 2.146"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.206 20.36a1.297 1.297 0 1 1-2.238-1.312 1.297 1.297 0 0 1 2.238 1.311"
    />
    <Circle
      cx={11.996}
      cy={11.986}
      r={3.659}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAiNetworkLight;
