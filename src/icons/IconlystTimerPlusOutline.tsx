import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerPlusOutline = ({
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
      d="M12.403 6.182a6.732 6.732 0 1 0 0 13.463 6.732 6.732 0 0 0 0-13.463m-8.231 6.732a8.232 8.232 0 1 1 16.463 0 8.23 8.23 0 0 1-8.232 8.231 8.23 8.23 0 0 1-8.231-8.231"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.402 9.61a.75.75 0 0 1 .75.75v5.108a.75.75 0 1 1-1.5 0v-5.109a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.1 12.914a.75.75 0 0 1 .75-.75h5.107a.75.75 0 1 1 0 1.5H9.85a.75.75 0 0 1-.75-.75M7.29 3.222a.75.75 0 0 1-.244 1.032 10.1 10.1 0 0 0-3.02 2.872.75.75 0 1 1-1.236-.849 11.6 11.6 0 0 1 3.469-3.3.75.75 0 0 1 1.032.245M17.515 3.214a.75.75 0 0 1 1.03-.248c1.38.844 2.57 1.984 3.481 3.311a.75.75 0 1 1-1.236.849 10.05 10.05 0 0 0-3.027-2.88.75.75 0 0 1-.248-1.032"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerPlusOutline;
