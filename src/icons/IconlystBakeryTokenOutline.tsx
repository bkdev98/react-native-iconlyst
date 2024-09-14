import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBakeryTokenOutline = ({
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
      d="M12.27 21.751q-.563 0-1.122-.062a9.751 9.751 0 0 1 1.1-19.439 1.95 1.95 0 0 1 1.953 1.956v1.949a3.913 3.913 0 0 0 3.9 3.906h1.94a1.946 1.946 0 0 1 1.955 1.929v.011a9.76 9.76 0 0 1-3.24 7.263 9.64 9.64 0 0 1-6.486 2.487m0-18a8.25 8.25 0 1 0 8.231 8.252l.75-.011h-.75a.45.45 0 0 0-.456-.431h-1.939a5.415 5.415 0 0 1-5.4-5.406V4.206a.45.45 0 0 0-.432-.456z"
    />
    <Path
      fill={props.color}
      d="M12.256 16.377a4.377 4.377 0 1 1 .002-8.753 4.377 4.377 0 0 1-.002 8.753m0-7.253a2.876 2.876 0 1 0 .002 5.752 2.876 2.876 0 0 0-.002-5.752"
    />
    <Path
      fill={props.color}
      d="M17.962 18.902q-.16 0-.318-.03a1.5 1.5 0 0 1-1.067-.855 2.35 2.35 0 0 1 .221-2.028c.321-.733.391-1.02.176-1.285a.32.32 0 0 0-.247-.132 3.13 3.13 0 0 0-1.637.758.748.748 0 0 1-1.245-.629.75.75 0 0 1 .273-.513 4.43 4.43 0 0 1 2.747-1.11 1.82 1.82 0 0 1 1.274.68 2.55 2.55 0 0 1 .034 2.831 2.3 2.3 0 0 0-.25.762c.155.085.622-.127.97-.422a.75.75 0 0 1 .975 1.14 3.34 3.34 0 0 1-1.906.833M7.815 11a3.44 3.44 0 0 1-2.433-5.873.75.75 0 1 1 1.06 1.061 1.941 1.941 0 1 0 2.746 2.745.75.75 0 0 1 1.06 1.061A3.43 3.43 0 0 1 7.815 11"
    />
  </Svg>
);
export default IconlystBakeryTokenOutline;
