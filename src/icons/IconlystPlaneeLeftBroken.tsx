import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneeLeftBroken = ({
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
      d="m9.55 16.77-2.49 2.45c-.487-.544-.987-1.02-1.381-1.572-.46-.643-.387-1.389-.14-2.101a203 203 0 0 1 1.742-4.88c.154-.41.084-.656-.217-.947-.867-.841-1.733-1.686-2.54-2.582-.83-.924-1.55-2.571-.503-3.617 1.046-1.047 2.694-.327 3.617.503.897.807 1.741 1.672 2.581 2.54.292.301.538.37.947.217a210 210 0 0 1 4.88-1.742c.713-.247 1.458-.32 2.101.139.553.395 1.028.896 1.573 1.381L17.4 8.92M15.055 11.302l2.229 2.68 2.758-.272 1.458 1.457-3.644 2.188L15.668 21l-1.457-1.459.286-2.772-2.694-2.215"
    />
  </Svg>
);
export default IconlystPlaneeLeftBroken;
