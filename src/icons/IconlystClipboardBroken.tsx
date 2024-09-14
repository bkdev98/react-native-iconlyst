import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.323 3c.75 0 1.357.607 1.357 1.356v.573c0 .75-.607 1.357-1.357 1.357H9.677c-.75 0-1.357-.608-1.357-1.357v-.573C8.32 3.607 8.927 3 9.677 3H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.32 4.594a3.755 3.755 0 0 0-3.755 3.754v8.898A3.755 3.755 0 0 0 8.32 21h3.997M15.68 4.594a3.755 3.755 0 0 1 3.754 3.754v8.898A3.755 3.755 0 0 1 15.68 21"
    />
  </Svg>
);
export default IconlystClipboardBroken;
