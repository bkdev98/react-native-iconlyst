import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchOffBulk = ({
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
      fill={props.color}
      d="M12.57 21.43c-4.484 0-8.132-3.647-8.132-8.13 0-1.802.585-3.528 1.658-4.934L4.7 6.97a.749.749 0 1 1 1.06-1.06L20.32 20.47a.749.749 0 1 1-1.06 1.06l-1.769-1.768a8.05 8.05 0 0 1-4.92 1.668M10.28 3.75h4.243a.75.75 0 0 0 0-1.5H10.28a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      d="M19.488 15.974a.5.5 0 0 0 .472.132.5.5 0 0 0 .358-.335 8.2 8.2 0 0 0 .384-2.471 8.1 8.1 0 0 0-2.448-5.81c.259-.26.481-.48.745-.743l.224-.224.113-.11a.751.751 0 0 0-1.057-1.065l-.18.179c-.378.375-.655.65-1.016 1.013a8.1 8.1 0 0 0-4.513-1.37c-.83 0-1.663.129-2.47.383a.499.499 0 0 0-.204.831z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStopwatchOffBulk;
