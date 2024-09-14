import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeLight = ({
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
      d="M4.23 9.463H19.93M15.608 3v2.872M8.555 3v2.872M19.933 11.364V8.43c.007-2.624-1.585-4.052-4.156-4.052h-7.39c-2.564 0-4.164 1.428-4.164 4.052v7.9c0 2.664 1.6 4.126 4.164 4.126h2.15"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.786 17.138a3.862 3.862 0 1 1-7.724 0 3.862 3.862 0 0 1 7.724 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.123 18.142-1.221-.73v-1.57M8.17 12.941h.01M8.17 16.418h.01M11.838 12.941h.01"
    />
  </Svg>
);
export default IconlystCalendarTimeLight;
