import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarSearchTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.222 3v2.962M8.951 3v2.962M20.684 11.624V8.6c.008-2.707-1.635-4.18-4.286-4.18h-7.62c-2.644 0-4.295 1.473-4.295 4.18v8.145c0 2.749 1.65 4.255 4.294 4.255h2.219"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.83 9.9H8.334M18.554 19.574 19.984 21m-3.364-6.347a2.84 2.84 0 1 1 0 5.681 2.84 2.84 0 0 1 0-5.68"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCalendarSearchTwoTone;
