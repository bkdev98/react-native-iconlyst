import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneErrorOutline = ({
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
      d="M12.251 21.59a.75.75 0 0 1-.75-.75v-2.85a.75.75 0 0 1 1.5 0v2.848a.753.753 0 0 1-.75.752M12.253 15.148A4.42 4.42 0 0 1 7.84 10.72V6.499a4.413 4.413 0 0 1 4.412-4.41.75.75 0 0 1 0 1.5A2.91 2.91 0 0 0 9.345 6.5v4.223a2.907 2.907 0 0 0 5.43 1.462.75.75 0 0 1 1.3.748 4.44 4.44 0 0 1-3.822 2.216"
    />
    <Path
      fill={props.color}
      d="M15.915 10.336a.73.73 0 0 1-.75-.726v-.048a.75.75 0 0 1 1.5 0 .77.77 0 0 1-.75.774m0-2.425a.75.75 0 0 1-.75-.75V4.066a.75.75 0 0 1 1.5 0v3.095a.75.75 0 0 1-.754.75z"
    />
    <Path
      fill={props.color}
      d="M12.253 18.743a7.973 7.973 0 0 1-7.959-7.993.75.75 0 1 1 1.5 0 6.457 6.457 0 1 0 12.914 0 .75.75 0 1 1 1.498-.004 7.984 7.984 0 0 1-7.953 7.997"
    />
  </Svg>
);
export default IconlystMicrophoneErrorOutline;
