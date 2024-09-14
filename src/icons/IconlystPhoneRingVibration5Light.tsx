import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration5Light = ({
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
      d="m18.191 17.09-.035-10.217a3.255 3.255 0 0 0-3.265-3.244l-4.596.015a3.254 3.254 0 0 0-3.243 3.267l.035 10.216a3.254 3.254 0 0 0 3.265 3.243l4.595-.015a3.255 3.255 0 0 0 3.244-3.266"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.904 7.746.788 1.155-1.064 1.545L4.687 12 3.622 13.55l1.059 1.556-.75 1.09M21.339 7.746l-.788 1.155 1.064 1.545L20.557 12l1.064 1.551-1.058 1.556.75 1.09M12.637 16.932v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystPhoneRingVibration5Light;
