import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingOfficeLight = ({
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
      d="M20.085 20.906V5.24c0-1.185-.96-2.146-2.146-2.146H7.005A2.146 2.146 0 0 0 4.859 5.24v15.666M3.47 20.906h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.154 20.907v-5.348c0-.592.48-1.07 1.07-1.07h2.492a1.07 1.07 0 0 1 1.072 1.07v5.348M10.156 8.583v.046m.19-.036a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0M14.788 8.583v.046m.19-.036a.19.19 0 1 1-.381 0 .19.19 0 0 1 .38 0"
    />
  </Svg>
);
export default IconlystBuildingOfficeLight;
