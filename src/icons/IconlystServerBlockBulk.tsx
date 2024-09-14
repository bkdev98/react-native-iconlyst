import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerBlockBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M15.457 2.25h-7.9c-3.24 0-5.5 2.18-5.5 5.3v3.15a.3.3 0 0 0 .3.3h18.4a.3.3 0 0 0 .3-.3V7.55c0-3.17-2.25-5.3-5.6-5.3M13.439 13.147c.232-.2.098-.647-.208-.647H2.357a.3.3 0 0 0-.3.3v3.15c0 3.17 2.21 5.3 5.5 5.3h4.485c.252 0 .397-.295.262-.508a5.86 5.86 0 0 1-.908-3.142c0-1.78.794-3.373 2.043-4.453" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.157 7.9h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5a.749.749 0 1 1 0 1.5m-8.7 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M7.457 17.1h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5a.749.749 0 1 1 0 1.5M17.793 20.25c-.437 0-.84-.11-1.199-.29l3.56-3.559c.18.36.29.762.29 1.2a2.62 2.62 0 0 1-2.65 2.65m0-5.3c.49 0 .94.137 1.33.36l-3.62 3.62a2.66 2.66 0 0 1-.36-1.33 2.62 2.62 0 0 1 2.65-2.65m0-1.5c-2.327 0-4.15 1.823-4.15 4.15s1.823 4.15 4.15 4.15 4.15-1.823 4.15-4.15-1.823-4.15-4.15-4.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerBlockBulk;
