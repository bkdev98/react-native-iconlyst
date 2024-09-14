import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPlayVoiceBroken = ({
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
      d="M8.828 15.58c8.133 8.13 10.447 4.608 10.812 4.316 2.907-2.907 1.588-3.367-.707-5.662-2.381-2.378-3.492 2.21-7.231-1.528s.846-4.852-1.533-7.233C7.873 3.18 7.42 1.853 4.506 4.768c-.258.321-3.03 2.164 1.918 8.186M16.201 5.045v1.95m5.3-1.95v1.95M18.85 3.14v5.655"
    />
  </Svg>
);
export default IconlystPhoneCallPlayVoiceBroken;
