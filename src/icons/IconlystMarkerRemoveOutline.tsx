import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerRemoveOutline = ({
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
      fillRule="evenodd"
      d="M8.026 6.618a.75.75 0 0 1-.008 1.06A6.05 6.05 0 0 0 6.208 12a6.04 6.04 0 0 0 6.037 6.038c1.688 0 3.22-.692 4.321-1.81a.75.75 0 1 1 1.069 1.053 7.55 7.55 0 0 1-5.39 2.257A7.54 7.54 0 0 1 4.708 12c0-2.106.865-4.018 2.257-5.39a.75.75 0 0 1 1.06.008M18.291 11.996a.75.75 0 0 1 .75-.75h2.209a.75.75 0 0 1 0 1.5H19.04a.75.75 0 0 1-.75-.75M12.25 2.25A.75.75 0 0 1 13 3v2.209a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 18.043a.75.75 0 0 1 .75.75v2.209a.75.75 0 0 1-1.5 0v-2.209a.75.75 0 0 1 .75-.75M2.5 12a.75.75 0 0 1 .75-.75h2.209a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 12M10.295 4.719a7.3 7.3 0 0 1 1.95-.266A7.545 7.545 0 0 1 19.794 12c0 .673-.092 1.328-.266 1.95a.75.75 0 1 1-1.445-.402c.137-.493.21-1.012.21-1.548a6.045 6.045 0 0 0-6.046-6.047c-.536 0-1.055.073-1.548.211a.75.75 0 0 1-.403-1.445M11.39 9.983a.75.75 0 0 1-.05 1.06 1.318 1.318 0 0 0 .906 2.277c.384 0 .73-.158.979-.419a.75.75 0 1 1 1.084 1.037 2.85 2.85 0 0 1-2.063.882 2.818 2.818 0 0 1-1.915-4.886.75.75 0 0 1 1.059.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.477 4.13a.75.75 0 0 1 1.061 0L20.71 19.302a.75.75 0 1 1-1.06 1.06L4.477 5.19a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMarkerRemoveOutline;
