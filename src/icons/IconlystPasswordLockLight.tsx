import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockLight = ({
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
      d="M9.985 13.286h4.034a2 2 0 0 0 2.002-2.002V9.02a2 2 0 0 0-2.002-2.002H9.985A2 2 0 0 0 7.982 9.02v2.264c0 1.106.897 2.002 2.003 2.002M12.002 9.709v.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.409 7.053V5.92a2.408 2.408 0 0 0-4.815-.01v1.144M16.02 10.97h.197c2.948 0 4.783 2.082 4.783 5.028s-1.835 5.026-4.784 5.026H7.782C4.834 21.024 3 18.943 3 15.998c0-2.946 1.843-5.027 4.782-5.027h.2M16.125 16.904h-.08m-8.007 0h-.079zm4.017 0h-.079z"
    />
  </Svg>
);
export default IconlystPasswordLockLight;
