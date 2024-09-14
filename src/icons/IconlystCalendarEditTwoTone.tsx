import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarEditTwoTone = ({
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
      d="M3.744 9.664h16.194"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.478 3v2.962M8.206 3v2.962M19.938 11.624V8.599c.008-2.707-1.635-4.18-4.286-4.18h-7.62c-2.644 0-4.294 1.473-4.294 4.18v8.144c0 2.749 1.65 4.255 4.294 4.255h2.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.61 20.855-.794.133a.89.89 0 0 1-1.031-.974l.088-.82c.043-.395.208-.768.474-1.065l3.462-3.779c.41-.441 1.1-.468 1.54-.059l.732.677a1.09 1.09 0 0 1 .059 1.541l-3.424 3.736a1.9 1.9 0 0 1-1.105.61"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.972 15.255 2.243 2.245M7.96 13.277h.01M7.96 16.754h.01M11.629 13.277h.01"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCalendarEditTwoTone;
