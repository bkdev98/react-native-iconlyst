import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone2Outline = ({
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
      d="M17.35 18.383H7.15a2.876 2.876 0 0 1-2.6-4.1l.436-.924a4.2 4.2 0 0 0 .4-1.78v-1.228a6.865 6.865 0 0 1 13.73 0v1.228c.001.616.138 1.224.4 1.781l.434.922a2.875 2.875 0 0 1-2.6 4.1zm-5.1-13.396a5.37 5.37 0 0 0-5.365 5.365v1.228A5.7 5.7 0 0 1 6.344 14l-.436.922a1.377 1.377 0 0 0 1.242 1.961h10.2a1.374 1.374 0 0 0 1.244-1.96l-.438-.924a5.7 5.7 0 0 1-.541-2.419v-1.228a5.37 5.37 0 0 0-5.365-5.365"
    />
    <Path
      fill={props.color}
      d="M12.249 4.988a.75.75 0 0 1-.75-.75V3a.75.75 0 1 1 1.5 0v1.238a.75.75 0 0 1-.75.75M9.238 9.848a.75.75 0 0 1-.741-.868 3.05 3.05 0 0 1 2.063-2.43.75.75 0 1 1 .47 1.424 1.56 1.56 0 0 0-1.052 1.241.75.75 0 0 1-.74.633M12.248 21.75a3.64 3.64 0 0 1-3.636-3.637.75.75 0 1 1 1.5 0 2.137 2.137 0 0 0 4.273 0 .75.75 0 1 1 1.5 0 3.64 3.64 0 0 1-3.637 3.636"
    />
  </Svg>
);
export default IconlystRingtone2Outline;
