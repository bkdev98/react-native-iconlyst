import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquareBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.958 15.29a.75.75 0 0 0 .75-.75v-2.632A5.715 5.715 0 0 0 12.002 6.2c-.749 0-1.487.147-2.194.436a.75.75 0 1 0 .567 1.388 4.212 4.212 0 0 1 5.833 3.885v2.631c0 .414.336.75.75.75M12.75 14.43V12.3a.75.75 0 0 0-1.5 0v2.13a.75.75 0 0 0 1.5 0"
    />
    <Path
      fill={props.color}
      d="M14.33 14.43a.75.75 0 0 0 .75-.75v-1.76a3.083 3.083 0 0 0-3.078-3.08 3.083 3.083 0 0 0-3.078 3.08v2.8a3.083 3.083 0 0 0 3.078 3.08.75.75 0 0 0 0-1.5c-.87 0-1.578-.71-1.578-1.58v-2.8c0-.872.708-1.58 1.578-1.58s1.578.708 1.578 1.58v1.76c0 .413.336.75.75.75M7.787 11.93c0-.9.274-1.764.793-2.498a.75.75 0 0 0-1.226-.866 5.8 5.8 0 0 0-1.067 3.363v3.64a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystTouchIdSquareBulk;
