import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPlayVoiceTwoTone = ({
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
      d="M11.702 12.706c3.739 3.738 4.85-.85 7.23 1.528 2.296 2.295 3.615 2.755.708 5.662-.365.292-2.679 3.815-10.812-4.316S4.213 5.132 4.506 4.768c2.915-2.915 3.367-1.588 5.663.705 2.38 2.38-2.206 3.495 1.533 7.233"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.201 5.045v1.95m5.3-1.95v1.95M18.85 3.14v5.655"
    />
  </Svg>
);
export default IconlystPhoneCallPlayVoiceTwoTone;
