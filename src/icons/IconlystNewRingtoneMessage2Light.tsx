import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessage2Light = ({
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
      d="m18.566 9.567.001 1.318c0 .78.172 1.55.504 2.255l.466.99c.713 1.515-.392 3.255-2.065 3.255H6.528c-1.674 0-2.778-1.74-2.066-3.254l.466-.99a5.3 5.3 0 0 0 .504-2.256l.001-1.318A6.566 6.566 0 0 1 12 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.517 3.586a1.73 1.73 0 1 1 0 3.46 1.73 1.73 0 0 1 0-3.46"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.902 17.9a3.1 3.1 0 1 0 6.2 0"
    />
  </Svg>
);
export default IconlystNewRingtoneMessage2Light;
