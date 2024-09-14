import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerTickOutline = ({
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
      d="M12.245 6.182a6.732 6.732 0 1 0 0 13.463 6.732 6.732 0 0 0 0-13.463m-8.231 6.732a8.232 8.232 0 1 1 16.463 0 8.23 8.23 0 0 1-8.232 8.231 8.23 8.23 0 0 1-8.231-8.231M7.133 3.222a.75.75 0 0 1-.246 1.032 10.1 10.1 0 0 0-3.019 2.872.75.75 0 1 1-1.236-.849 11.6 11.6 0 0 1 3.469-3.3.75.75 0 0 1 1.032.245M17.356 3.214a.75.75 0 0 1 1.032-.248c1.38.844 2.57 1.984 3.48 3.311a.75.75 0 1 1-1.237.849 10.05 10.05 0 0 0-3.026-2.88.75.75 0 0 1-.249-1.032"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.992 10.255a.75.75 0 0 1 0 1.06l-3.724 3.727a.75.75 0 0 1-1.061 0L9.399 13.23a.75.75 0 0 1 1.061-1.06l1.278 1.28 3.194-3.196a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerTickOutline;
