import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingChatBroken = ({
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
      d="M9.01 8.744h1.48M15.28 8.705v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.339 13.27c0 1.763-1.33 3.19-2.97 3.19-1.639 0-2.968-1.427-2.968-3.19z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.614 5.633c-3.511-3.51-9.216-3.51-12.727 0a9.01 9.01 0 0 0-1.803 10.156c.197.493.35.89.35 1.274 0 1.074-1.035 2.404-.344 3.095.69.69 2.02-.346 3.089-.353.383.001.787.16 1.28.36 3.33 1.54 7.406.946 10.155-1.805a9 9 0 0 0 1.82-10.113"
    />
  </Svg>
);
export default IconlystWinkingChatBroken;
