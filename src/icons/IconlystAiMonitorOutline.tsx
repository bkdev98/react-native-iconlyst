import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiMonitorOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 7.312c0-2.639 2.14-4.779 4.778-4.779h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456a4.78 4.78 0 0 1-4.78 4.779H7.029a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.279a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.313a3.28 3.28 0 0 0-3.28-3.279zM6.305 20.717a.75.75 0 0 1 .75-.75h9.888a.75.75 0 0 1 0 1.5H7.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.004 16.06a.75.75 0 0 1 .62.861l-.638 3.918a.75.75 0 1 1-1.48-.241l.637-3.918a.75.75 0 0 1 .86-.62M13.995 16.06a.75.75 0 0 1 .86.62l.638 3.918a.75.75 0 0 1-1.48.24l-.638-3.917a.75.75 0 0 1 .62-.86M10.207 6.217a.75.75 0 0 1 .687.442l2.768 6.148a.75.75 0 0 1-1.368.616L10.22 8.816l-2.012 4.6a.75.75 0 1 1-1.374-.602l2.69-6.148a.75.75 0 0 1 .683-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.257 12.283H8.24v-1.5h4.016zM15.944 6.441a.75.75 0 0 1 .75.75v5.922a.75.75 0 0 1-1.5 0V7.191a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiMonitorOutline;
