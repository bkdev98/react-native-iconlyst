import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer24Outline = ({
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
      d="M8.642 20.856a.74.74 0 0 1-.306-.066 9.546 9.546 0 1 1 12.2-13.383.75.75 0 1 1-1.312.729A8.044 8.044 0 1 0 8.95 19.42a.75.75 0 0 1-.306 1.435z"
    />
    <Path
      fill={props.color}
      d="M20.206 8.519h-2.918a.75.75 0 1 1 0-1.5h2.168V4.836a.75.75 0 1 1 1.5 0v2.933a.75.75 0 0 1-.75.75M12.25 12.804H8.865a.75.75 0 1 1 0-1.5H11.5V7.95a.75.75 0 1 1 1.5 0v4.1a.75.75 0 0 1-.75.755M20.333 21.484a.75.75 0 0 1-.75-.75v-.521h-2.348a.749.749 0 0 1-.61-1.188l3.1-4.308a.75.75 0 0 1 1.36.438v3.558h.326a.75.75 0 1 1 0 1.5h-.327v.52a.75.75 0 0 1-.751.75m-1.635-2.771h.884v-1.23zM15.45 21.463h-2.97a.75.75 0 0 1-.75-.75 3.4 3.4 0 0 1 1.907-2.84c.739-.5 1.063-.77 1.063-1.214a.735.735 0 1 0-1.47 0 .75.75 0 1 1-1.5 0 2.235 2.235 0 0 1 4.47 0 3 3 0 0 1-1.72 2.455 4.1 4.1 0 0 0-1.014.849h1.984a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystForwardClockTimer24Outline;
