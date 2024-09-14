import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareDashLight = ({
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
      d="M13.981 21H10.02M3.027 16.915c.312 2.233 1.795 3.803 4.047 4.066M16.893 20.981c2.252-.263 3.724-1.833 4.036-4.066M21 13.981V10.02M13.982 3H10.02M3 13.981V10.02M3.027 7.095C3.34 4.862 4.822 3.283 7.074 3.02M16.893 3.02c2.252.263 3.724 1.842 4.036 4.075"
    />
  </Svg>
);
export default IconlystSquareDashLight;
