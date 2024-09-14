import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLayersBroken = ({
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
      d="m17.604 10.09 1.64.887.4.225a1.26 1.26 0 0 1 0 2.194l-5.433 3.052a4.14 4.14 0 0 1-4.054 0l-5.433-3.052a1.26 1.26 0 0 1 0-2.194l.4-.225 1.596-.915"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m6.818 14.572-1.825.878c-.925.432-.974 1.738-.084 2.238l5.247 2.948a4.14 4.14 0 0 0 4.055 0M17.674 14.502l1.811.921c.897.452.926 1.73.05 2.221l-2.662 1.496M14.211 3.699a4.14 4.14 0 0 0-4.054 0L4.724 6.75a1.26 1.26 0 0 0 0 2.195l5.433 3.052a4.14 4.14 0 0 0 4.054 0l5.433-3.052a1.26 1.26 0 0 0 0-2.195l-2.716-1.526"
    />
  </Svg>
);
export default IconlystLayersBroken;
