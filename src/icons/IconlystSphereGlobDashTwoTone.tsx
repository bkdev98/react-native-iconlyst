import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobDashTwoTone = ({
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
      d="M12.5 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12c0-.599.365-1.163 1.01-1.66M7.162 9.101c1.058-.312 2.291-.534 3.63-.636M14.12 8.458c1.337.097 2.572.312 3.633.619M21.5 12c0-.599-.365-1.163-1.01-1.66M21.5 12c0 1.988-4.03 3.6-9 3.6s-9-1.612-9-3.6"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSphereGlobDashTwoTone;
