import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleReminderLight = ({
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
      d="M11 7.5h6M11 12h6m-6 4.5h6M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.512 7.481v.086M7.86 7.5a.351.351 0 1 1-.703 0 .351.351 0 0 1 .703 0M7.512 11.981v.086M7.86 12a.351.351 0 1 1-.703 0 .351.351 0 0 1 .703 0M7.512 16.481v.086m.349-.067a.351.351 0 1 1-.703 0 .351.351 0 0 1 .703 0"
    />
  </Svg>
);
export default IconlystAppleReminderLight;
