import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneQuestionBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="m21.358 15.663-.034.123c-.366 1.185-.988 2.445-1.85 3.742a2.647 2.647 0 0 1-2.274 1.297c-.456 0-.907-.12-1.313-.354a2.64 2.64 0 0 1-.962-3.597l1.582-2.742a2.64 2.64 0 0 1 3.597-.965l.14.08q.006-.162.006-.326c0-4.547-3.703-8.246-8.254-8.246-4.547 0-8.246 3.7-8.246 8.246q0 .165.006.33l.15-.086a2.62 2.62 0 0 1 1.994-.261 2.62 2.62 0 0 1 1.598 1.227l1.583 2.744a2.638 2.638 0 0 1-2.277 3.95q-.345 0-.687-.091a2.6 2.6 0 0 1-1.585-1.206c-.727-1.095-1.285-2.163-1.661-3.182a9.6 9.6 0 0 1-.621-3.425c0-5.374 4.372-9.746 9.746-9.746 5.378 0 9.754 4.372 9.754 9.746 0 .938-.131 1.856-.392 2.742"
    />
    <Path
      fill={props.color}
      d="M11.965 13.697a.75.75 0 0 1-.75-.74c-.013-1.03.825-1.501 1.275-1.754l.1-.057c.452-.25.503-.539.503-.735a.955.955 0 0 0-.954-.954.943.943 0 0 0-.953.954.75.75 0 0 1-1.5 0c0-1.353 1.1-2.454 2.453-2.454a2.457 2.457 0 0 1 2.454 2.454c0 .867-.45 1.592-1.268 2.043l-.1.055c-.354.2-.511.31-.51.428a.75.75 0 0 1-.74.76zM11.965 15.717a.75.75 0 0 1-.75-.75c0-.415.336-.758.75-.758s.75.329.75.742v.015a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystHeadphoneQuestionBold;
