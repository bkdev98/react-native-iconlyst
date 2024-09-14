import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerOffSleepBold = ({
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
      d="M6.796 4.373a.749.749 0 1 0-.788-1.276A11.7 11.7 0 0 0 2.54 6.4a.75.75 0 1 0 1.236.85 10.2 10.2 0 0 1 3.02-2.877M21.777 6.4a11.5 11.5 0 0 0-3.485-3.307.75.75 0 0 0-.776 1.284 10 10 0 0 1 3.025 2.873.75.75 0 1 0 1.235-.85M13.921 15.725h-3.534a.75.75 0 0 1-.555-1.255l2.391-2.625h-1.798a.75.75 0 0 1 0-1.5h3.496a.75.75 0 0 1 .555 1.255l-2.391 2.625h1.836a.75.75 0 0 1 0 1.5m-1.767-10.67c-4.401 0-7.982 3.58-7.982 7.98s3.581 7.98 7.982 7.98 7.982-3.58 7.982-7.98-3.581-7.98-7.982-7.98"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerOffSleepBold;
