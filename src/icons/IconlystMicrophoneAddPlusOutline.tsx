import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneAddPlusOutline = ({
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
      d="M12.254 18.743a7.97 7.97 0 0 1-7.958-7.993.75.75 0 0 1 .75-.748.75.75 0 0 1 .748.752 6.457 6.457 0 1 0 12.913 0 .75.75 0 0 1 1.498-.004 7.983 7.983 0 0 1-7.951 7.993"
    />
    <Path
      fill={props.color}
      d="M12.252 15.147a4.416 4.416 0 0 1-4.413-4.426V6.5a4.414 4.414 0 0 1 4.409-4.41.75.75 0 1 1 0 1.5 2.913 2.913 0 0 0-2.91 2.91v4.222a2.909 2.909 0 1 0 5.819 0 .75.75 0 0 1 .748-.752.75.75 0 0 1 .75.748 4.415 4.415 0 0 1-4.4 4.427z"
    />
    <Path
      fill={props.color}
      d="M15.969 8.428a.75.75 0 0 1-.75-.75V6.5h-1.177a.75.75 0 1 1 0-1.5h1.177V3.824a.75.75 0 1 1 1.5 0V5h1.177a.75.75 0 1 1 0 1.5h-1.177v1.178a.75.75 0 0 1-.75.75M12.253 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.75.75 0 0 1-.75.752"
    />
  </Svg>
);
export default IconlystMicrophoneAddPlusOutline;
