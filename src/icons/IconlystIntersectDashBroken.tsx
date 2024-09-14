import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntersectDashBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 13.547v2.087M5.871 8.107C4.248 8.155 3.183 9.221 3 10.772M10.483 21.002H8.396M13.008 21c1.623-.047 2.688-1.113 2.871-2.664M5.871 21C4.248 20.954 3.183 19.888 3 18.337M21 10.453V8.367M18.129 15.894c1.623-.048 2.688-1.115 2.871-2.665M13.518 3h2.086M10.992 3c-1.623.048-2.688 1.114-2.87 2.665M18.129 3c1.623.048 2.688 1.114 2.871 2.665M13.745 8.275c1.22 0 1.98.861 1.98 2.08v3.29c0 1.218-.76 2.08-1.98 2.08h-3.49c-1.22 0-1.98-.862-1.98-2.08v-3.29c0-1.219.763-2.08 1.98-2.08h.49"
    />
  </Svg>
);
export default IconlystIntersectDashBroken;
