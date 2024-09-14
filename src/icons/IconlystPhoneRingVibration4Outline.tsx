import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration4Outline = ({
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
      fill={props.color}
      d="M13.527 21.632c-.415-.001-.827-.065-1.222-.191l-4.41-1.4a4.027 4.027 0 0 1-2.623-5.055L8.38 5.178a4.026 4.026 0 0 1 5.056-2.622l4.412 1.4A4.033 4.033 0 0 1 20.47 9.01l-3.108 9.808a4.03 4.03 0 0 1-3.835 2.813M12.216 3.869A2.53 2.53 0 0 0 9.81 5.633l-3.108 9.799a2.527 2.527 0 0 0 1.646 3.172l4.411 1.4a2.53 2.53 0 0 0 3.173-1.646L19.04 8.55a2.53 2.53 0 0 0-1.645-3.172l-4.413-1.4a2.5 2.5 0 0 0-.766-.114zM3.871 12.574a.75.75 0 0 1-.715-.977l1.543-4.87a.75.75 0 1 1 1.43.453l-1.543 4.87a.75.75 0 0 1-.715.524M20.328 17.79a.75.75 0 0 1-.715-.977l1.543-4.87a.75.75 0 0 1 1.43.453l-1.543 4.87a.75.75 0 0 1-.715.524"
    />
    <Path fill={props.color} d="M11.395 17.727a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default IconlystPhoneRingVibration4Outline;
