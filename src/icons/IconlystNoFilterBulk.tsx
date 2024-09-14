import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoFilterBulk = ({
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
      fillRule="evenodd"
      d="M5.422 2.596a.75.75 0 1 0-1.06 1.06L5 4.296a3.16 3.16 0 0 0-1.224 2.499v2.03c0 1.108.45 2.2 1.257 3.018l4.316 3.832c.193.193.3.45.3.725v3.199a2.025 2.025 0 0 0 2.021 2.027c.254 0 .51-.048.752-.147l1.86-.741a2.035 2.035 0 0 0 1.288-1.882v-1.97c0-.296.118-.566.347-.774l.452-.447 1.293 1.293a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.03 3.628h-8.485a.5.5 0 0 0-.351.856l8.334 8.21a.497.497 0 0 0 .685.016l1.58-1.42a4.28 4.28 0 0 0 1.392-3.152V6.792a3.16 3.16 0 0 0-3.154-3.164"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoFilterBulk;
