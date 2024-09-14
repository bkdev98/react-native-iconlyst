import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserScanBroken = ({
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
      d="M21.398 15.531v1.577A3.89 3.89 0 0 1 17.505 21h-1.289M3.4 15.531v1.577A3.89 3.89 0 0 0 7.295 21H8.55M3.4 8.47V6.893A3.89 3.89 0 0 1 7.295 3h1.289M12.4 6.818a2.386 2.386 0 1 0 2.067 1.196M14.9 16.731c.752-.223 1.235-.612 1.235-1.258 0-1.22-1.71-1.536-3.735-1.536-2.016 0-3.735.305-3.735 1.525 0 1.152 1.523 1.497 3.397 1.532M21.4 8.47V6.893A3.89 3.89 0 0 0 17.508 3H16.25"
    />
  </Svg>
);
export default IconlystUserScanBroken;
