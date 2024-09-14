import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxBroken = ({
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
      d="M8.915 6.018 6.98 7.892a2.47 2.47 0 0 0-.75 1.772v8.87A2.467 2.467 0 0 0 8.695 21H12M15.306 20.998a2.466 2.466 0 0 0 2.465-2.466v-8.87c0-.667-.27-1.306-.75-1.771l-1.935-1.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.957 6.017h-.042m6.17 0h-.042M12 3H7.995a.974.974 0 0 0-.974.974v1.07c0 .536.436.973.974.973h8.009c.539 0 .975-.437.975-.974v-1.07A.975.975 0 0 0 16.004 3h-.626M11.998 12.02v3.377M13.688 13.707H10.31M6.285 17.818h11.428M6.285 9.795h8.384"
    />
  </Svg>
);
export default IconlystPillsBoxBroken;
