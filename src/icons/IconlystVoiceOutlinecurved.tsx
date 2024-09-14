import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.365 13.324a.75.75 0 0 1 .75.75 4.919 4.919 0 1 0 9.839 0 .75.75 0 0 1 1.5 0 6.42 6.42 0 0 1-12.84 0 .75.75 0 0 1 .75-.75M5.615 8.565a6.42 6.42 0 0 1 6.419-6.419 6.42 6.42 0 0 1 6.42 6.419v2.254a.75.75 0 1 1-1.5 0V8.565a4.92 4.92 0 0 0-9.84 0v2.254a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.034 18.994a.75.75 0 0 1 .75.75v2.152a.75.75 0 0 1-1.5 0v-2.152a.75.75 0 0 1 .75-.75M4.15 14.074a.75.75 0 0 1 .75-.75h14.268a.75.75 0 0 1 0 1.5H4.9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVoiceOutlinecurved;
