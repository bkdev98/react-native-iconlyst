import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletSquareBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.771 11.14a.64.64 0 0 1 .64-.64h5.177a.64.64 0 0 1 .64.64v2.015a3.228 3.228 0 0 1-6.38.698M12 16.388v4.749M10.316 10.5V8.659m3.368 1.841V8.659"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 8.163c0-2.945-1.835-5.026-4.783-5.026H7.782C4.842 3.137 3 5.217 3 8.163v7.947c0 2.945 1.834 5.027 4.782 5.027h8.434c2.949 0 4.784-2.082 4.784-5.027v-3.973"
    />
  </Svg>
);
export default IconlystPowerOutletSquareBroken;
