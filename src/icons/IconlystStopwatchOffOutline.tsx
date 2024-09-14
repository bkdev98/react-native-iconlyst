import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchOffOutline = ({
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
      d="M7.124 7.592a.75.75 0 0 1 .045 1.06 6.85 6.85 0 0 0-1.8 4.644 6.88 6.88 0 0 0 6.881 6.883 6.8 6.8 0 0 0 4.634-1.808.75.75 0 0 1 1.018 1.1 8.3 8.3 0 0 1-5.652 2.208 8.38 8.38 0 0 1-8.382-8.383c0-2.182.833-4.175 2.196-5.659a.75.75 0 0 1 1.06-.045M9.209 3a.75.75 0 0 1 .75-.75h4.244a.75.75 0 0 1 0 1.5H9.959a.75.75 0 0 1-.75-.75M12.25 6.416c-.724 0-1.434.117-2.096.326a.75.75 0 1 1-.452-1.43 8.384 8.384 0 0 1 10.534 10.534.75.75 0 1 1-1.43-.451 6.884 6.884 0 0 0-6.556-8.979"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.018 5.347a.75.75 0 0 1 0 1.06L17.546 7.88a.75.75 0 0 1-1.06-1.06l1.471-1.472a.75.75 0 0 1 1.06 0M4.38 5.911a.75.75 0 0 1 1.06 0L20 20.47a.75.75 0 0 1-1.061 1.06L4.38 6.973a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchOffOutline;
