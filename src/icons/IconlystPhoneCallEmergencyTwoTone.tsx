import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallEmergencyTwoTone = ({
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
      d="M11.725 12.87c3.707 3.706 4.81-.843 7.17 1.515 2.277 2.277 3.585 2.732.702 5.615-.362.29-2.657 3.784-10.722-4.28S4.3 5.36 4.59 4.999c2.89-2.89 3.34-1.575 5.615.7 2.36 2.36-2.187 3.465 1.521 7.172"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.85 3v5.908M21.408 7.432 16.291 4.48M21.408 4.477 16.291 7.43"
    />
  </Svg>
);
export default IconlystPhoneCallEmergencyTwoTone;
