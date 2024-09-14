import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSegmentOutline = ({
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
      fillRule="evenodd"
      d="M8.996 9.152a.75.75 0 0 1 .75-.75h11.255a.75.75 0 0 1 0 1.5H9.746a.75.75 0 0 1-.75-.75M2.249 14.18a.75.75 0 0 1 .75-.75h11.106a.75.75 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75M20.952 12.058a.75.75 0 0 1 .681.812A9.734 9.734 0 0 1 7.93 20.89a.75.75 0 1 1 .617-1.368A8.234 8.234 0 0 0 20.14 12.74a.75.75 0 0 1 .813-.681M14.87 4.3A8.232 8.232 0 0 0 3.85 10.314a.75.75 0 0 1-1.469-.304A9.732 9.732 0 0 1 15.41 2.9a.75.75 0 0 1-.54 1.4M17.147 4.985a.868.868 0 1 1 1.736 0 .868.868 0 0 1-1.736 0M4.524 18.712a.868.868 0 1 1 1.737 0 .868.868 0 0 1-1.737 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSegmentOutline;
