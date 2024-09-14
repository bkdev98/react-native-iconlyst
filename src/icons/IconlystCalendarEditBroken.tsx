import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarEditBroken = ({
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
      d="M3.994 9.664h13.308M15.728 3v2.962M8.456 3v2.962M20.193 11.622V8.597c.008-2.707-1.634-4.179-4.285-4.179h-.175m-5.227 16.578H8.287c-2.643 0-4.293-1.506-4.293-4.255V8.597c0-1.658.62-2.853 1.707-3.53M12.628 4.418H8.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.86 20.855-.794.133a.89.89 0 0 1-1.031-.974l.088-.82c.043-.395.208-.768.474-1.065l3.462-3.779c.41-.441 1.1-.468 1.54-.059l.732.677a1.09 1.09 0 0 1 .059 1.541l-3.424 3.736a1.9 1.9 0 0 1-1.105.61"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.222 15.255 2.243 2.245M8.201 13.277h.01M8.201 16.754h.01M11.87 13.277h.01"
    />
  </Svg>
);
export default IconlystCalendarEditBroken;
