import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrashTruckTwoTone = ({
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
      d="M15.888 4.209h-3.07a.8.8 0 0 0-.789.8v8.07a.68.68 0 0 1-.259.544.68.68 0 0 1-.588.126L3.03 11.396a.71.71 0 0 1-.53-.67V5.962a.693.693 0 0 1 .682-.694h8.847M10.464 17.976q0 .267-.071.524c-.107.409-.34.768-.665 1.025a1.82 1.82 0 0 1-1.129.396c-.408 0-.805-.139-1.13-.396a1.93 1.93 0 0 1-.664-1.025 1.9 1.9 0 0 1-.07-.524c.037-.486.249-.94.595-1.27.345-.331.799-.515 1.269-.515s.923.184 1.269.515c.345.33.558.784.596 1.27M19.946 17.976q.001.267-.07.524c-.107.409-.34.768-.665 1.025a1.82 1.82 0 0 1-1.13.396c-.408 0-.805-.139-1.129-.396a1.93 1.93 0 0 1-.665-1.025 1.9 1.9 0 0 1-.07-.524c.037-.486.25-.94.595-1.27s.799-.515 1.27-.515c.47 0 .923.184 1.268.515.346.33.559.784.596 1.27M16.106 17.926h-5.53M6.429 17.973H4.923a.894.894 0 0 1-.882-.883v-1.506"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.533 12.02h4.53"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.465 17.878V7.29a.79.79 0 0 1 .788-.788h2.588a1.81 1.81 0 0 1 1.482.775l2.86 4.154c.215.305.326.672.317 1.046v3.448a2.08 2.08 0 0 1-2.082 2.082H20.1"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.205 8.762v4.223M5.736 9.479v2.54"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrashTruckTwoTone;
