import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration1Bulk = ({
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
      fillRule="evenodd"
      d="M4.557 8.757a.75.75 0 0 0-1.029.258c-.029.048-.707 1.198-.707 2.985s.678 2.938.707 2.986a.746.746 0 0 0 1.023.257.753.753 0 0 0 .266-1.025c-.005-.008-.496-.869-.496-2.218s.491-2.21.493-2.214a.75.75 0 0 0-.257-1.029M21.714 9.015a.747.747 0 0 0-1.023-.258.754.754 0 0 0-.266 1.026c.005.007.496.869.496 2.217 0 1.335-.48 2.193-.496 2.217a.751.751 0 0 0 1.29.768c.028-.047.706-1.198.706-2.985s-.678-2.937-.707-2.985"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.771 3.2h-4.4c-2.15 0-3.9 1.7-3.9 3.8v10c0 2.1 1.75 3.8 3.9 3.8h4.4c2.15 0 3.9-1.7 3.9-3.8V7c0-2.1-1.75-3.8-3.9-3.8"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.571 17.75c-.53 0-.95-.42-.95-.95 0-.54.5-.95.95-.95.53 0 .95.42.95.95 0 .54-.5.95-.95.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneRingVibration1Bulk;
