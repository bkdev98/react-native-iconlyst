import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer24Broken = ({
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
      d="M9.294 3.855c4.134-1.596 8.739.148 10.835 3.92M8.892 20.108a8.81 8.81 0 0 1-4.644-4.879 8.805 8.805 0 0 1 2.43-9.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.455 4.84v2.933h-2.918M12.498 7.953v4.104H9.115M20.582 20.737v-1.27m0 0h1.077m-1.077 0h-3.098l3.098-4.309zM12.732 16.663a1.486 1.486 0 0 1 2.97 0c0 1.856-2.969 1.856-2.969 4.054h2.969"
    />
  </Svg>
);
export default IconlystForwardClockTimer24Broken;
