import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLockBroken = ({
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
      d="M19.124 20.553h-2.621a1.3 1.3 0 0 1-1.3-1.3V17.78a1.3 1.3 0 0 1 1.3-1.3h2.62c.719 0 1.301.582 1.301 1.3v1.471a1.3 1.3 0 0 1-1.3 1.301"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.378 16.506v-.969a1.565 1.565 0 0 0-3.129-.006v.975M6.165 8.142a4.7 4.7 0 1 0 1.083-3M4.45 19.468c-.11-.638-.065-1.3-.065-1.944 0-2.43 1.97-4.399 4.4-4.399h4.283q.49.001.95.103"
    />
  </Svg>
);
export default IconlystUserLockBroken;
