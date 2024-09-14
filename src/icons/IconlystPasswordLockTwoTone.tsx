import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordLockTwoTone = ({
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
      d="M10.485 13.286h4.034a2 2 0 0 0 2.002-2.002V9.02a2 2 0 0 0-2.002-2.002h-4.034A2 2 0 0 0 8.482 9.02v2.264c0 1.106.897 2.002 2.003 2.002M12.502 9.709v.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.909 7.053V5.92a2.408 2.408 0 0 0-4.815-.01v1.144"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.52 10.97h.197c2.948 0 4.783 2.082 4.783 5.028s-1.835 5.026-4.784 5.026H8.282c-2.948 0-4.782-2.081-4.782-5.026 0-2.946 1.843-5.027 4.782-5.027h.2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.625 16.904h-.08m-8.007 0h-.079zm4.017 0h-.079z"
    />
  </Svg>
);
export default IconlystPasswordLockTwoTone;
