import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownChartBulk = ({
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
      d="M14.47 4.787c0-.244.025-.48.067-.71.047-.262-.143-.514-.407-.514H7.48c-3.036 0-5.074 2.137-5.074 5.32v7.58c0 3.175 2.038 5.31 5.073 5.31h8.061c3.035 0 5.073-2.134 5.073-5.31V9.621c0-.279-.278-.472-.55-.405a4.3 4.3 0 0 1-1.032.128 4.566 4.566 0 0 1-4.562-4.558"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.122 17.144a.75.75 0 0 0 .595-1.207l-2.806-3.649a.748.748 0 0 0-1.059-.132l-2.605 2.051-2.282-2.95a.751.751 0 0 0-1.187.917l2.745 3.55a.75.75 0 0 0 1.057.13l2.604-2.05 2.343 3.047c.148.193.37.293.595.293"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.032 2.227a2.565 2.565 0 0 0-2.562 2.56 2.556 2.556 0 0 0 2.562 2.559 2.556 2.556 0 0 0 2.562-2.56 2.565 2.565 0 0 0-2.562-2.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownChartBulk;
