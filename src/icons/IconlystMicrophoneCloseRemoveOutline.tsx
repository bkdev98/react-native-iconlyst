import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneCloseRemoveOutline = ({
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
      d="M12.255 18.743a7.973 7.973 0 0 1-7.958-7.993.75.75 0 0 1 .75-.748.75.75 0 0 1 .748.752 6.457 6.457 0 1 0 12.913 0 .75.75 0 0 1 .748-.752.75.75 0 0 1 .75.748 7.984 7.984 0 0 1-7.951 7.993"
    />
    <Path
      fill={props.color}
      d="M12.254 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.75.75 0 0 1-.75.752M12.253 15.147A4.417 4.417 0 0 1 7.84 10.72V6.5a4.414 4.414 0 0 1 4.409-4.41.75.75 0 0 1 0 1.5 2.913 2.913 0 0 0-2.91 2.91v4.222a2.909 2.909 0 1 0 5.819 0 .75.75 0 0 1 .748-.752.75.75 0 0 1 .75.748 4.415 4.415 0 0 1-4.4 4.427z"
    />
    <Path
      fill={props.color}
      d="M14.777 8.032a.75.75 0 0 1-.53-1.28l.828-.829-.827-.828a.75.75 0 0 1 1.06-1.06l.828.827.827-.827a.75.75 0 0 1 1.06 1.06l-.827.828.828.828a.75.75 0 0 1-1.061 1.06l-.827-.827-.828.828a.75.75 0 0 1-.531.22"
    />
  </Svg>
);
export default IconlystMicrophoneCloseRemoveOutline;
