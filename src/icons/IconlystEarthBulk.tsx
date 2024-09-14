import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthBulk = ({
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
      d="M21.101 11.74a.73.73 0 0 0-.81-.68c-.41.03-.72.4-.68.81.031.339.031.68.011 1.023a.747.747 0 0 1-.72.704c-.815.032-1.976-.1-3.58-.657-1.35-.48-2.06-.08-2.42.34-.983 1.134-.443 3.59.503 5.833a.73.73 0 0 1-.54.992c-1.257.238-3.059-.165-3.987-1.293-.834-1.012.008-1.692.283-2.733.52-1.97-.24-2.67-.85-3.24-.34-.31-.6-.56-.68-1.02-.13-.82.18-1.13.85-1.8.35-.35.78-.79 1.21-1.38.89-1.25.005-2.508.443-3.314.173-.317.637-.375.987-.415.42-.05.71-.42.66-.83a.746.746 0 0 0-.83-.66 9.2 9.2 0 0 0-1.91.43 9.14 9.14 0 0 0-5.81 11.22c1.17 3.96 4.81 6.55 8.78 6.55.87 0 1.76-.13 2.64-.39.07-.02.14-.04.21-.07a9.1 9.1 0 0 0 6.16-7.18c.12-.74.15-1.49.08-2.24"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.391 5.1a.939.939 0 1 1 0 1.88.939.939 0 1 1 0-1.88m-.02 6.34c.84 0 3.87-2.58 3.87-5.19a3.88 3.88 0 0 0-3.87-3.87 3.88 3.88 0 0 0-3.87 3.87c0 2.61 3.03 5.19 3.87 5.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthBulk;
