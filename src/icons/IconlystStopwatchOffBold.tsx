import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchOffBold = ({
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
      fill={props.color}
      d="M9.71 3.75h4.243a.75.75 0 0 0 0-1.5H9.71a.75.75 0 0 0 0 1.5M12 21.43c-4.484 0-8.132-3.647-8.132-8.13 0-1.802.585-3.528 1.658-4.934L4.13 6.97a.749.749 0 1 1 1.06-1.06l14.558 14.56a.749.749 0 1 1-1.06 1.06l-1.768-1.768A8.05 8.05 0 0 1 12 21.43M18.918 15.974a.5.5 0 0 0 .472.132.5.5 0 0 0 .358-.335 8.2 8.2 0 0 0 .384-2.471 8.1 8.1 0 0 0-2.449-5.81l.746-.743.224-.224.113-.11a.751.751 0 0 0-1.057-1.065l-.18.179c-.378.375-.655.65-1.016 1.013A8.1 8.1 0 0 0 12 5.17c-.831 0-1.663.129-2.471.383a.499.499 0 0 0-.204.831z"
    />
  </Svg>
);
export default IconlystStopwatchOffBold;
