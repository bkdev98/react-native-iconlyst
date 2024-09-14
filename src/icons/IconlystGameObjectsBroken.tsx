import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameObjectsBroken = ({
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
      d="m4.268 14.14 6.23 6.23m0-6.23-6.231 6.23M20.207 20.673c.792 0 1.433-.642 1.433-1.433v-3.97c0-.791-.641-1.433-1.433-1.433h-3.97c-.791 0-1.432.642-1.432 1.434v3.969c0 .79.64 1.433 1.433 1.433h1.336M3.907 8.415a1.223 1.223 0 0 0 1.067 1.819h4.818a1.223 1.223 0 0 0 1.067-1.82l-2.41-4.313a1.222 1.222 0 0 0-2.133 0l-.93 1.665M21.75 6.854a3.527 3.527 0 1 1-1.952-3.157"
    />
  </Svg>
);
export default IconlystGameObjectsBroken;
