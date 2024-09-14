import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessage2Broken = ({
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
      d="m19.066 9.566.001 1.319c0 .78.172 1.55.504 2.255l.466.99c.713 1.515-.392 3.255-2.065 3.255H7.028c-1.674 0-2.778-1.74-2.066-3.254l.466-.99a5.3 5.3 0 0 0 .504-2.256l.001-1.319M6.691 6.5A6.57 6.57 0 0 1 12.5 3M18.747 5.316a1.73 1.73 0 1 1-1.73-1.73M9.402 17.9a3.1 3.1 0 1 0 6.2 0"
    />
  </Svg>
);
export default IconlystNewRingtoneMessage2Broken;
