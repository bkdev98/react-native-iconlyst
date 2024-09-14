import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer24Light = ({
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
      d="M8.392 20.109a8.8 8.8 0 0 1-4.644-4.88A8.803 8.803 0 0 1 8.794 3.856c4.134-1.596 8.739.148 10.835 3.92"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.955 4.84v2.933h-2.918M11.998 7.953v4.104H8.615M20.082 20.737v-1.27m0 0h1.077m-1.077 0h-3.098l3.098-4.309zM12.232 16.663a1.486 1.486 0 0 1 2.97 0c0 1.856-2.969 1.856-2.969 4.054h2.969"
    />
  </Svg>
);
export default IconlystForwardClockTimer24Light;
