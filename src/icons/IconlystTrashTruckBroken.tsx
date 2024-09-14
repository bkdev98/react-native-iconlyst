import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrashTruckBroken = ({
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
      d="M15.388 4.209h-3.07a.8.8 0 0 0-.789.8v8.07a.68.68 0 0 1-.259.543.68.68 0 0 1-.588.127L2.53 11.396a.71.71 0 0 1-.53-.67V5.961a.693.693 0 0 1 .682-.694H9.07M9.964 17.975c0 .177-.023.355-.071.525-.107.408-.34.768-.665 1.025a1.82 1.82 0 0 1-1.129.396c-.408 0-.805-.14-1.13-.396a1.93 1.93 0 0 1-.664-1.025 1.9 1.9 0 0 1-.07-.525c.037-.486.249-.94.595-1.27.345-.33.799-.514 1.269-.514s.923.183 1.269.514c.346.33.558.784.596 1.27M19.446 17.975c.001.177-.023.355-.07.525-.107.408-.34.768-.665 1.025a1.82 1.82 0 0 1-1.13.396c-.408 0-.805-.14-1.129-.396a1.93 1.93 0 0 1-.665-1.025 1.9 1.9 0 0 1-.07-.525c.037-.486.25-.94.595-1.27s.799-.514 1.27-.514c.47 0 .923.183 1.268.514.346.33.559.784.596 1.27M15.673 17.925H10.01M5.929 17.973H4.423a.894.894 0 0 1-.882-.882v-1.507M14.033 12.02h4.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.965 17.879V7.291a.79.79 0 0 1 .788-.788h2.588a1.81 1.81 0 0 1 1.482.775l2.86 4.154c.215.305.326.672.317 1.046v3.448a2.08 2.08 0 0 1-2.082 2.082H19.6M8.705 8.76v4.305M5.236 9.479v2.54"
    />
  </Svg>
);
export default IconlystTrashTruckBroken;
