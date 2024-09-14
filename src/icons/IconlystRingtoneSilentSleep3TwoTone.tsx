import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSilentSleep3TwoTone = ({
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
      d="M12.5 3a6.566 6.566 0 0 1 6.566 6.566l.001 1.319c0 .78.172 1.55.504 2.255l.466.99c.712 1.514-.392 3.255-2.066 3.255H7.028c-1.674 0-2.778-1.74-2.066-3.255l.466-.99a5.3 5.3 0 0 0 .504-2.255l.001-1.319"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.248 4.207h2.21l-2.21 2.437h2.21M11.395 8.805h3.08l-3.08 3.397h3.08M9.4 17.9a3.1 3.1 0 1 0 6.199 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtoneSilentSleep3TwoTone;
