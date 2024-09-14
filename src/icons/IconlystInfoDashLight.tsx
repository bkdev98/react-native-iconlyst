import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoDashLight = ({
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
      d="M13.983 21H10.02m3.963-18H10.02M3 13.98v-3.962M3.027 7.095C3.34 4.862 4.822 3.283 7.074 3.02M3.027 16.914c.313 2.233 1.795 3.802 4.047 4.066M20.999 13.98v-3.962M16.893 20.981c2.252-.264 3.724-1.833 4.036-4.066M16.893 3.02c2.252.263 3.724 1.842 4.036 4.075M12 15.701v-4.31m0-3.044v-.048"
    />
  </Svg>
);
export default IconlystInfoDashLight;
