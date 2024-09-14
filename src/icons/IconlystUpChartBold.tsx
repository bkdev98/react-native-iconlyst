import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpChartBold = ({
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
      d="m16.215 12.173-2.746 3.55a.75.75 0 0 1-.5.285.74.74 0 0 1-.557-.155l-2.603-2.05-2.344 3.048a.75.75 0 0 1-1.05.137.75.75 0 0 1-.139-1.051l2.806-3.65a.75.75 0 0 1 1.058-.132l2.606 2.05 2.282-2.95a.75.75 0 1 1 1.187.918M14.97 4.786q.002-.364.068-.71c.047-.26-.143-.513-.408-.513H7.98c-3.035 0-5.074 2.137-5.074 5.32v7.579c0 3.177 2.04 5.31 5.074 5.31h8.061c3.034 0 5.072-2.133 5.072-5.31v-6.84c0-.278-.279-.472-.55-.405a4.3 4.3 0 0 1-1.03.129 4.566 4.566 0 0 1-4.563-4.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.532 2.227a2.565 2.565 0 0 0-2.562 2.56 2.556 2.556 0 0 0 2.562 2.559 2.556 2.556 0 0 0 2.562-2.56 2.565 2.565 0 0 0-2.562-2.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpChartBold;
