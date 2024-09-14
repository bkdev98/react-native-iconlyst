import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtmosphereLight = ({
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
    <Circle
      cx={12.114}
      cy={12}
      r={2.482}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 17.605a5.6 5.6 0 0 1-4.885-2.853M17.72 12c0 1.354-.48 2.597-1.28 3.565M6.509 12a5.605 5.605 0 0 1 5.605-5.605M12.115 21a9 9 0 0 1-3.593-.745M15.783 3.78a9.03 9.03 0 0 1 4.807 5.188M4.154 16.204A8.96 8.96 0 0 1 3.114 12c0-1.761.506-3.405 1.381-4.792M12.114 3a8.96 8.96 0 0 0-4.412 1.153M20.417 15.479a9.03 9.03 0 0 1-2.982 3.78"
    />
  </Svg>
);
export default IconlystAtmosphereLight;
