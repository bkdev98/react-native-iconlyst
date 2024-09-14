import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrashTruckLight = ({
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
      d="M15.638 4.208h-3.07a.8.8 0 0 0-.789.8v8.07a.68.68 0 0 1-.259.544.68.68 0 0 1-.588.127L2.78 11.396a.71.71 0 0 1-.53-.67V5.96a.693.693 0 0 1 .682-.694h8.847M10.214 17.975c0 .177-.023.355-.071.525-.107.408-.34.768-.665 1.025a1.82 1.82 0 0 1-1.129.396c-.408 0-.805-.14-1.13-.396a1.93 1.93 0 0 1-.664-1.025 1.9 1.9 0 0 1-.07-.525c.037-.486.249-.94.595-1.27.345-.33.799-.514 1.269-.514s.923.184 1.269.514.558.784.596 1.27M19.696 17.975c.001.177-.023.355-.07.525-.107.408-.34.768-.665 1.025a1.82 1.82 0 0 1-1.13.396c-.408 0-.805-.14-1.129-.396a1.93 1.93 0 0 1-.665-1.025 1.9 1.9 0 0 1-.07-.525c.037-.486.25-.94.595-1.27s.799-.514 1.27-.514c.47 0 .923.184 1.268.514.346.33.559.784.596 1.27M15.856 17.925h-5.53M6.179 17.973H4.673a.894.894 0 0 1-.882-.882v-1.506M14.283 12.02h4.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.215 17.879V7.29a.79.79 0 0 1 .788-.788h2.588a1.81 1.81 0 0 1 1.482.775l2.86 4.153c.215.306.326.673.317 1.047v3.448a2.08 2.08 0 0 1-2.082 2.082h-.318M8.955 8.76v4.224M5.486 9.479v2.54"
    />
  </Svg>
);
export default IconlystTrashTruckLight;
