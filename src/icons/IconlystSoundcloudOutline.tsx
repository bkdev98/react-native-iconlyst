import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoundcloudOutline = ({
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
      d="M2.003 18.37c-.41 0-.75-.34-.75-.75v-2.94c0-.41.34-.75.75-.75s.75.34.75.75v2.94c0 .41-.34.75-.75.75M5.534 18.38c-.41 0-.75-.34-.75-.75v-6.72c0-.41.34-.75.75-.75s.75.34.75.75v6.72c0 .41-.34.75-.75.75M9.074 18.37c-.41 0-.75-.34-.75-.75V8.23c0-.41.34-.75.75-.75s.75.34.75.75v9.39c0 .41-.34.75-.75.75M18.814 18.371h-6.13c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.13c.76 0 1.47-.35 1.93-.95.47-.61.62-1.38.41-2.16-.2-.76-.82-1.4-1.58-1.64-.6-.18-.86-.14-1.37.07-.22.09-.47.08-.68-.05a.73.73 0 0 1-.36-.58c-.23-2.61-2.07-4.44-4.48-4.44-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.93 0 5.23 1.97 5.84 4.9.43-.06.89-.03 1.49.15a3.89 3.89 0 0 1 2.59 2.69c.33 1.22.08 2.48-.67 3.46s-1.89 1.54-3.12 1.54z"
    />
  </Svg>
);
export default IconlystSoundcloudOutline;
