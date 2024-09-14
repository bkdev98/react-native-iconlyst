import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration5Broken = ({
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
      d="M17.656 10.56V6.872a3.255 3.255 0 0 0-3.265-3.244l-4.596.015a3.254 3.254 0 0 0-3.243 3.267l.035 10.216a3.254 3.254 0 0 0 3.265 3.243l4.595-.015a3.255 3.255 0 0 0 3.244-3.266l-.01-3.252M3.404 7.746l.788 1.155-1.064 1.545L4.187 12 3.122 13.55l1.059 1.556-.75 1.09M20.839 7.746l-.788 1.155 1.064 1.545L20.057 12l1.064 1.551-1.058 1.556.75 1.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.137 16.932v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneRingVibration5Broken;
