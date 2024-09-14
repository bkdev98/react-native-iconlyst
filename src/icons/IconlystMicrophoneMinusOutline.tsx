import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMinusOutline = ({
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
      d="M12.252 15.147a4.416 4.416 0 0 1-4.413-4.426V6.5a4.414 4.414 0 0 1 4.409-4.41.75.75 0 1 1 0 1.5 2.913 2.913 0 0 0-2.91 2.91v4.222a2.909 2.909 0 0 0 5.819 0 .75.75 0 0 1 .748-.752.75.75 0 0 1 .75.748 4.415 4.415 0 0 1-4.405 4.427z"
    />
    <Path
      fill={props.color}
      d="M17.181 6.928h-3.069a.75.75 0 1 1 0-1.5h3.07a.75.75 0 1 1 0 1.5M12.255 18.743a7.984 7.984 0 0 1-7.96-7.993.75.75 0 0 1 .75-.748.75.75 0 0 1 .749.752 6.457 6.457 0 1 0 12.913 0 .75.75 0 0 1 .748-.752.75.75 0 0 1 .75.748 7.983 7.983 0 0 1-7.95 7.993"
    />
    <Path
      fill={props.color}
      d="M12.253 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.75.75 0 0 1-.75.752"
    />
  </Svg>
);
export default IconlystMicrophoneMinusOutline;
