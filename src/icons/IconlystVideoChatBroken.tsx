import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoChatBroken = ({
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
      d="M5.72 5.633A9.01 9.01 0 0 0 3.919 15.79c.197.492.35.888.35 1.273 0 1.074-1.035 2.404-.345 3.095.691.69 2.021-.346 3.09-.352.383 0 .787.16 1.28.358 3.33 1.542 7.406.947 10.155-1.804a9 9 0 0 0 0-12.727A9.01 9.01 0 0 0 9.234 3.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.8 14.85c-.903.356-1.66-.088-1.772-.979a17.5 17.5 0 0 1 0-3.745c.122-.926.957-1.32 1.773-.975a9.4 9.4 0 0 1 2.801 1.757c.697.631.713 1.528 0 2.185"
    />
  </Svg>
);
export default IconlystVideoChatBroken;
