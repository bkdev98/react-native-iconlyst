import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectDashTwoTone = ({
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
      d="M3.5 13.547v2.087M6.371 8.107c-1.623.048-2.688 1.114-2.871 2.665M10.983 21.002H8.896M13.508 21c1.623-.047 2.688-1.113 2.871-2.664M6.371 21c-1.623-.047-2.688-1.113-2.871-2.664M21.5 10.453V8.367M18.629 15.894c1.623-.048 2.688-1.115 2.871-2.665M14.018 3h2.086M11.492 3c-1.623.048-2.688 1.114-2.87 2.665M18.629 3c1.623.048 2.688 1.114 2.871 2.665"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.754 8.275h3.491c1.22 0 1.98.861 1.98 2.08v3.29c0 1.218-.76 2.08-1.98 2.08h-3.49c-1.22 0-1.98-.862-1.98-2.08v-3.29c0-1.219.763-2.08 1.98-2.08"
    />
  </Svg>
);
export default IconlystIntersectDashTwoTone;
