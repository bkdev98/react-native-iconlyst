import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBulk = ({
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
      d="M19.91 14.308v2.13c0 1.66 0 2.5-.35 3.22s-.93 1.3-1.64 1.64c-.72.35-1.55.35-3.22.35H9.3c-1.67 0-2.5 0-3.22-.35-.71-.34-1.29-.92-1.64-1.64s-.35-1.56-.35-3.22v-2.13c0-1.67 0-2.51.35-3.23.34-.71.92-1.3 1.64-1.64.22-.11.46-.18.73-.23.4-.07.88-.1 1.5-.1.29-.01.62-.01.99-.01h5.4c1.66 0 2.5 0 3.22.33.72.35 1.3.94 1.64 1.65.35.72.35 1.56.35 3.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.49 6.326c.13.39.56.6.95.46.39-.13.6-.56.46-.95a5.1 5.1 0 0 0-2.64-2.96 5.1 5.1 0 0 0-3.96-.23 5.22 5.22 0 0 0-3.49 4.87v1.69c.4-.07.88-.1 1.5-.1v-1.59a3.72 3.72 0 0 1 2.48-3.46c.93-.32 1.93-.26 2.82.17s1.55 1.17 1.88 2.1M9.418 14.48h5.163a.75.75 0 0 0 0-1.5H9.418a.75.75 0 0 0 0 1.5M9.418 17.792h5.163a.75.75 0 0 0 0-1.5H9.418a.75.75 0 1 0 0 1.5"
    />
  </Svg>
);
export default IconlystUnlockBulk;
