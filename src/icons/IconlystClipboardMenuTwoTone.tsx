import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardMenuTwoTone = ({
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
      d="M14.823 6.286h-4.646c-.75 0-1.357-.608-1.357-1.357v-.573C8.82 3.607 9.427 3 10.177 3h4.646c.75 0 1.357.607 1.357 1.356v.573c0 .75-.607 1.357-1.357 1.357"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.18 4.594a3.755 3.755 0 0 1 3.754 3.754v8.898A3.755 3.755 0 0 1 16.179 21H8.82a3.755 3.755 0 0 1-3.755-3.754V8.348A3.755 3.755 0 0 1 8.82 4.594"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.985 11h3.987m-6.944 0h.281M11.985 15.82h3.987m-6.944 0h.281"
    />
  </Svg>
);
export default IconlystClipboardMenuTwoTone;
