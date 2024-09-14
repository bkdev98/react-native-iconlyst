import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtone4TwoTone = ({
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
      d="M5.933 9.566a6.566 6.566 0 1 1 13.133 0l.001 1.319c0 .78.171 1.55.504 2.255l.466.99c.712 1.514-.392 3.255-2.066 3.255H7.028c-1.674 0-2.778-1.74-2.066-3.255l.466-.99a5.3 5.3 0 0 0 .504-2.255z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.4 17.9a3.1 3.1 0 1 0 6.199 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtone4TwoTone;
