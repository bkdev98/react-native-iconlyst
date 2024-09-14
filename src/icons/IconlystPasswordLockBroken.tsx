import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.269 13.327a2 2 0 0 0 2.002-2.002V9.06a2 2 0 0 0-2.002-2.002h-4.034A2 2 0 0 0 8.232 9.06v2.264c0 1.106.897 2.002 2.003 2.002h.503M12.252 9.75v.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.659 7.094V5.96a2.408 2.408 0 0 0-4.815-.01v1.144M16.27 11.012h.197c2.948 0 4.783 2.08 4.783 5.027 0 2.945-1.835 5.026-4.784 5.026h-4.217M8.232 11.012h-.2c-2.94 0-4.782 2.08-4.782 5.027 0 2.945 1.834 5.026 4.782 5.026h.589M8.288 16.945h-.079m4.096 0h-.079m4.149 0h-.08"
    />
  </Svg>
);
export default IconlystPasswordLockBroken;
