import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLastFmCircleTwoTone = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 10.426c-.236-1.45-2.4-1.622-3.046-.542-.415.694-.132 1.569.61 1.848.955.36 2.436.135 2.436 1.57 0 1.385-1.312 1.626-2.28 1.472-2.097-.333-2.327-3.264-3.588-4.672a2.54 2.54 0 0 0-1.816-.811C7.979 9.29 7 10.52 7 12.015s.873 2.644 2.21 2.644c.368 0 .894-.064 1.383-.304"
    />
  </Svg>
);
export default IconlystLastFmCircleTwoTone;
