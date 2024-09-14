import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneOutline = ({
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
      d="M12.252 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.75.75 0 0 1-.75.752"
    />
    <Path
      fill={props.color}
      d="M12.254 18.743a7.974 7.974 0 0 1-7.96-7.993.75.75 0 0 1 .75-.748.75.75 0 0 1 .749.752 6.457 6.457 0 1 0 12.914 0 .75.75 0 0 1 .749-.751.75.75 0 0 1 .75.749 7.984 7.984 0 0 1-7.952 7.991"
    />
    <Path
      fill={props.color}
      d="M12.254 15.147a4.42 4.42 0 0 1-4.412-4.427V6.5a4.41 4.41 0 1 1 8.82 0v4.222a4.417 4.417 0 0 1-4.408 4.425m0-11.557A2.913 2.913 0 0 0 9.345 6.5v4.224a2.91 2.91 0 1 0 5.82 0V6.5a2.913 2.913 0 0 0-2.91-2.91"
    />
    <Path
      fill={props.color}
      d="M12.25 11.506a.746.746 0 0 1-.75-.745v-.009a.75.75 0 1 1 .75.754m.56-2.453h-1.12a.75.75 0 1 1 0-1.5h1.12a.75.75 0 0 1 0 1.5m-.56-2.444a.746.746 0 0 1-.75-.745v-.01a.75.75 0 1 1 .75.755"
    />
  </Svg>
);
export default IconlystMicrophoneOutline;
