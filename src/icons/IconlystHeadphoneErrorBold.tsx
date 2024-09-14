import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneErrorBold = ({
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
      d="m21.358 15.662-.034.124c-.366 1.185-.988 2.445-1.85 3.742a2.647 2.647 0 0 1-2.274 1.297c-.456 0-.907-.12-1.313-.354a2.64 2.64 0 0 1-.962-3.597l1.582-2.742a2.64 2.64 0 0 1 3.597-.965l.14.08q.006-.162.006-.326c0-4.547-3.703-8.246-8.254-8.246-4.547 0-8.246 3.7-8.246 8.246q0 .165.006.33l.15-.086a2.62 2.62 0 0 1 1.994-.261 2.62 2.62 0 0 1 1.598 1.227l1.583 2.744a2.638 2.638 0 0 1-2.277 3.95q-.345 0-.687-.091a2.6 2.6 0 0 1-1.585-1.206c-.727-1.095-1.285-2.163-1.661-3.182a9.6 9.6 0 0 1-.621-3.425c0-5.374 4.372-9.746 9.746-9.746 5.378 0 9.754 4.372 9.754 9.746 0 .938-.131 1.855-.392 2.741"
    />
    <Path
      fill={props.color}
      d="M11.998 13.106a.75.75 0 0 1-.75-.75V9.264a.75.75 0 0 1 1.5 0v3.092a.75.75 0 0 1-.75.75M12.002 15.508a.746.746 0 0 1-.75-.745v-.01a.75.75 0 0 1 1.5 0 .755.755 0 0 1-.75.755"
    />
  </Svg>
);
export default IconlystHeadphoneErrorBold;
