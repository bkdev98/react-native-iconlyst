import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryWarningLight = ({
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
      d="M18.363 9.566v7.319c0 2.546-1.42 4.123-4.03 4.115h-3.416c-2.61 0-4.038-1.577-4.038-4.123V9.566c0-2.539 1.453-4.124 4.104-4.124h3.35c2.61 0 4.03 1.585 4.03 4.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.686 5.594v-.8c0-1.3.742-1.794 2.1-1.794h1.707c1.333 0 2.06.493 2.06 1.794v.792M12.621 10.56v2.913m0 2.536v-.055"
    />
  </Svg>
);
export default IconlystBatteryWarningLight;
