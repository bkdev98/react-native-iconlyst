import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPeraBulk = ({
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
      d="M11.383 21.566c1.931.645 3.811.299 5.327-.64 1.57-.843 2.81-2.298 3.217-4.294.67-3.001-.819-6.176-3.57-7.568-1.132-.572-2.264-1.083-2.946-2.271-2.501-4.324-5.98-2.17-6.08-2.111-.101.057-3.705 1.993-1.212 6.32.689 1.186.565 2.421.495 3.687-.17 3.08 1.834 5.955 4.769 6.877"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.562 13.86a2.577 2.577 0 1 0-4.463 2.575 2.577 2.577 0 0 0 4.463-2.576M7.028 2.25a.75.75 0 0 1 .734.764v.028999999999999998q0 .04.004.118c.006.106.019.257.048.434.06.364.179.787.402 1.136a.75.75 0 0 1-1.263.808c-.376-.587-.542-1.231-.62-1.701a5.6 5.6 0 0 1-.071-.828v-.025l.75.015-.75-.016a.75.75 0 0 1 .766-.734"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPeraBulk;
