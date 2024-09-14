import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneNumberPadLight = ({
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
      d="M16.81 18.53a1.47 1.47 0 1 0 2.94.001 1.47 1.47 0 0 0-2.94 0M4.248 18.53a1.47 1.47 0 1 0 2.94 0 1.47 1.47 0 0 0-2.94 0M10.53 18.53a1.47 1.47 0 1 0 2.939.002 1.47 1.47 0 0 0-2.94-.001M16.81 12a1.47 1.47 0 1 0 2.94 0 1.47 1.47 0 0 0-2.94 0M10.53 12a1.47 1.47 0 1 0 2.939 0 1.47 1.47 0 0 0-2.94 0M4.248 12a1.47 1.47 0 1 0 2.941-.001 1.47 1.47 0 0 0-2.941 0M16.81 5.47a1.47 1.47 0 1 0 2.94 0 1.47 1.47 0 0 0-2.94 0M10.53 5.47a1.47 1.47 0 1 0 2.939.001 1.47 1.47 0 0 0-2.94 0M4.248 5.47a1.47 1.47 0 1 0 2.94 0 1.47 1.47 0 0 0-2.94 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneNumberPadLight;
