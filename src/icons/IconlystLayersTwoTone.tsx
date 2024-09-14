import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLayersTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="m18.104 10.09 1.64.887.4.225a1.26 1.26 0 0 1 0 2.194l-5.433 3.052a4.14 4.14 0 0 1-4.054 0l-5.433-3.052a1.26 1.26 0 0 1 0-2.194l.4-.225 1.596-.915"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="m18.173 14.502 1.812.921c.897.452.925 1.73.05 2.221l-5.324 2.992a4.14 4.14 0 0 1-4.055 0L5.41 17.688c-.89-.5-.841-1.806.084-2.238l1.825-.878"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M10.657 3.699 5.224 6.75a1.26 1.26 0 0 0 0 2.195l5.433 3.052a4.14 4.14 0 0 0 4.054 0l5.433-3.052a1.26 1.26 0 0 0 0-2.195L14.711 3.7a4.14 4.14 0 0 0-4.054 0Z"
    />
  </Svg>
);
export default IconlystLayersTwoTone;
