import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerReloudBulk = ({
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
      <Path d="M21.345 7.066v3.15a.3.3 0 0 1-.3.3h-18.4a.3.3 0 0 1-.3-.3v-3.15c0-3.121 2.26-5.3 5.5-5.3h7.9c3.35 0 5.6 2.13 5.6 5.3M12.29 15.083v1.7c0 .53.164 1.02.444 1.424.08.115.084.267.013.386a2.5 2.5 0 0 0-.315 1.755c.04.206-.107.418-.317.418H7.844c-3.29 0-5.5-2.13-5.5-5.3v-3.15a.3.3 0 0 1 .3-.3h18.4a.3.3 0 0 1 .3.3v.889c0 .257-.308.401-.52.257a5.73 5.73 0 0 0-3.235-.979 5.7 5.7 0 0 0-1.816.301 2.5 2.5 0 0 0-3.484 2.299" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.745 5.916h-.5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5m8.699 0h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5M7.745 16.616h-.5a.75.75 0 0 1 0-1.5h.5a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.59 17.533h-1.8a.75.75 0 0 1-.75-.75v-1.7a.75.75 0 0 1 1.494-.093 3.94 3.94 0 0 1 2.172-.657 3.91 3.91 0 0 1 3.95 3.95 3.955 3.955 0 0 1-3.95 3.95c-1.315 0-2.558-.686-3.324-1.833a.75.75 0 0 1 1.248-.834c.487.731 1.264 1.167 2.076 1.167 1.328 0 2.45-1.122 2.45-2.45 0-1.397-1.054-2.45-2.45-2.45-.34 0-.675.076-.981.212a.75.75 0 0 1-.136 1.488"
    />
  </Svg>
);
export default IconlystServerReloudBulk;
