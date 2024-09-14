import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomInBroken = ({
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
      d="M19.017 9.221V7.543c0-2.607-1.624-4.45-4.234-4.45H7.317c-2.601 0-4.233 1.843-4.233 4.45v.57M9.286 19.025H7.317c-2.61 0-4.233-1.842-4.233-4.45V11.06M15 20.902c-1.358 0-2.201-.957-2.201-2.313v-3.658c0-1.355.847-2.314 2.2-2.314h3.883c1.357 0 2.201.958 2.201 2.314v3.658c0 1.356-.844 2.313-2.201 2.313M10.952 11.045 7.176 7.27m3.776 3.775-.007-3.396m.007 3.396-3.397-.006"
    />
  </Svg>
);
export default IconlystZoomInBroken;
