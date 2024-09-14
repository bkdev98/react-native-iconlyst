import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd">
      <G fillRule="nonzero" opacity={0.4}>
        <Path d="M14.418 5.49a.854.854 0 0 0-1.004.68.86.86 0 0 0 .678 1.01 3.46 3.46 0 0 1 2.743 2.75.86.86 0 0 0 1.006.681.865.865 0 0 0 .677-1.01 5.17 5.17 0 0 0-4.1-4.111" />
        <Path d="M14.356 2.008a.82.82 0 0 0-.625.176.85.85 0 0 0-.323.584.86.86 0 0 0 .757.95 6.91 6.91 0 0 1 6.126 6.139.857.857 0 1 0 1.704-.192c-.455-4.058-3.595-7.206-7.639-7.657" />
      </G>
      <Path d="M11.032 12.972c3.989 3.988 4.894-.625 7.434 1.913 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C-.993 7.644 2.762 5.172 3.074 4.784c3.11-3.11 3.592-1.695 6.04.753 2.54 2.54-2.071 3.447 1.918 7.435" />
    </G>
  </Svg>
);
export default IconlystCallingBulk;
