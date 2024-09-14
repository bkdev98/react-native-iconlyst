import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneRingVibration3Outline = ({
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
      d="M3.89 15.437a.75.75 0 0 1-.75-.747l-.018-5.322a.75.75 0 1 1 1.498-.004l.018 5.32a.75.75 0 0 1-.747.753M21.872 15.38a.75.75 0 0 1-.75-.748l-.017-5.321a.75.75 0 0 1 1.277-.534c.14.14.22.33.22.529l.017 5.322a.75.75 0 0 1-.747.752M10.48 21.53a4.16 4.16 0 0 1-4.163-4.15L6.28 6.665a4.17 4.17 0 0 1 4.15-4.178l4.821-.015h.015a4.17 4.17 0 0 1 4.162 4.148l.037 10.717a4.165 4.165 0 0 1-4.149 4.179l-4.82.015zm4.786-17.56h-.01l-4.82.016A2.67 2.67 0 0 0 7.78 6.66l.037 10.716a2.66 2.66 0 0 0 2.663 2.654h.01l4.821-.015a2.667 2.667 0 0 0 2.654-2.673l-.037-10.718a2.666 2.666 0 0 0-2.662-2.653"
    />
    <Path fill={props.color} d="M12.89 18.123a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </Svg>
);
export default IconlystPhoneRingVibration3Outline;
