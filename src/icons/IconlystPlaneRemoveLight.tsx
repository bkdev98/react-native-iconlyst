import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRemoveLight = ({
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
      d="M8.988 9.82c-1.09.504-2.17 1.017-3.243 1.55-.594.287-1.1.702-1.216 1.377-.1.586-.08 1.189-.118 1.83 1.973.018 3.875.026 5.812.044l.279 3.037-1.865 1.54V21l3.604-.901 3.603.9v-1.801l-1.892-1.54.252-2.623M3.94 4.766l15.53 15.53M10.268 7.063c.008-.514.018-1.018.044-1.523.055-1.08.63-2.54 1.929-2.54 1.288 0 1.864 1.46 1.918 2.54.055 1.054.045 2.109.028 3.163-.01.368.099.567.45.72q2.066.946 4.09 1.947c.595.288 1.099.702 1.216 1.377.099.586.081 1.19.117 1.83-.621.008-1.441.008-2.26.018"
    />
  </Svg>
);
export default IconlystPlaneRemoveLight;
