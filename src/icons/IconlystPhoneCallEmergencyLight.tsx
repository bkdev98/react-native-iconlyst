import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallEmergencyLight = ({
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
      d="M11.225 12.87c3.707 3.706 4.81-.843 7.17 1.515 2.277 2.277 3.585 2.732.702 5.615-.362.29-2.657 3.784-10.722-4.28S3.8 5.36 4.09 4.999c2.89-2.89 3.34-1.575 5.616.7 2.36 2.36-2.188 3.465 1.52 7.172"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.35 3v5.908M20.908 7.432 15.791 4.48M20.908 4.477 15.791 7.43"
    />
  </Svg>
);
export default IconlystPhoneCallEmergencyLight;
