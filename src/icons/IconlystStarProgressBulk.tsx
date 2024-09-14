import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarProgressBulk = ({
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
      d="M11.76 20.16V3.8a1.6 1.6 0 0 1 .74-.18c.59 0 1.12.32 1.39.84q.008.006.009.01v.01c.01 0 .01.01.01.01l2.16 4.35 4.84.71c.6.09 1.08.5 1.26 1.07.19.57.04 1.18-.4 1.6l-3.49 3.38.82 4.78c.1.59-.13 1.18-.61 1.53-.28.2-.61.3-.93.3-.25 0-.5-.05-.73-.17l-4.33-2.26z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.76 3.8c-.284.15-.52.387-.67.689l-.44.9a.74.74 0 0 0 .34 1c.25.13.54.1.76-.06v12.15l-1.01.53a.745.745 0 1 0 .69 1.32l.33-.17zM8.238 20.305l-.763.4-.1-.067.168-.96a.75.75 0 1 0-1.48-.257l-.166.963a1.57 1.57 0 0 0 2.276 1.65l.762-.4a.75.75 0 0 0-.697-1.329M6.588 16.393l.135-.788-.338-.324a.75.75 0 1 1 1.037-1.083l.626.599a.75.75 0 0 1 .221.668l-.202 1.181a.75.75 0 0 1-1.479-.253M5.304 10.892a.75.75 0 0 0 .64-.847.756.756 0 0 0-.849-.638l-1.005.141c-.597.088-1.082.5-1.265 1.073a1.55 1.55 0 0 0 .402 1.597l1.28 1.24a.749.749 0 1 0 1.043-1.077l-1.28-1.24.035-.109z"
    />
    <Path
      fill={props.color}
      d="M9.48 7.744a.75.75 0 0 1 1.342.671l-.724 1.451a.75.75 0 0 1-.561.406l-1.428.21a.75.75 0 1 1-.219-1.484l1.04-.153z"
    />
  </Svg>
);
export default IconlystStarProgressBulk;
