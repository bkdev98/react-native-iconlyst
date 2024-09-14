import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsBoxLight = ({
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
      d="M8.916 6.016 6.98 7.89a2.47 2.47 0 0 0-.75 1.771v8.87a2.467 2.467 0 0 0 2.466 2.466h6.61a2.466 2.466 0 0 0 2.465-2.466v-8.87c0-.667-.27-1.306-.75-1.771l-1.936-1.875"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.957 6.017h-.042m6.17 0h-.042m-7.048 0h8.009c.539 0 .975-.437.975-.974v-1.07A.975.975 0 0 0 16.004 3H7.995a.974.974 0 0 0-.974.974v1.07c0 .536.436.973.974.973M11.998 12.02v3.377M13.688 13.707H10.31M6.285 17.82h11.428M6.285 9.797h11.428"
    />
  </Svg>
);
export default IconlystPillsBoxLight;
