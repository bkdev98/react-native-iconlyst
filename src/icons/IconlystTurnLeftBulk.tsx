import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M8.791 14.994v-1.796a1 1 0 0 0-1.594-.805l-3.791 2.796c-.017.014-.024.036-.041.05a1 1 0 0 0-.195.23c-.022.036-.052.065-.07.104a1 1 0 0 0-.1.421c0 .152.04.293.1.422.018.038.048.067.07.104a1 1 0 0 0 .195.23c.017.014.024.036.041.049l3.791 2.797a1.001 1.001 0 0 0 1.594-.805v-3.797"
    />
    <Path
      fill={props.color}
      d="M6.42 4.708h8.437A6.15 6.15 0 0 1 21 10.852a6.15 6.15 0 0 1-6.143 6.142H8.791v-2h6.066A4.147 4.147 0 0 0 19 10.852a4.15 4.15 0 0 0-4.143-4.144H6.42a1 1 0 0 1 0-2"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTurnLeftBulk;
