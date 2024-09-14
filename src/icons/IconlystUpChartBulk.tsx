import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpChartBulk = ({
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
      d="M14.47 4.786q.002-.365.068-.71c.047-.26-.143-.513-.408-.513H7.48c-3.035 0-5.074 2.136-5.074 5.32v7.579c0 3.177 2.04 5.31 5.074 5.31h8.061c3.034 0 5.072-2.133 5.072-5.31v-6.84c0-.279-.279-.472-.55-.405a4.3 4.3 0 0 1-1.03.128 4.566 4.566 0 0 1-4.563-4.56"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.97 15.725 2.745-3.55a.75.75 0 0 0-1.187-.918l-2.282 2.95-2.606-2.05a.748.748 0 0 0-1.058.132l-2.806 3.65a.75.75 0 0 0 1.19.914l2.343-3.048 2.603 2.05c.157.125.354.18.556.155a.75.75 0 0 0 .501-.285"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.032 2.227a2.565 2.565 0 0 0-2.562 2.56 2.556 2.556 0 0 0 2.562 2.559 2.556 2.556 0 0 0 2.562-2.56 2.565 2.565 0 0 0-2.562-2.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpChartBulk;
