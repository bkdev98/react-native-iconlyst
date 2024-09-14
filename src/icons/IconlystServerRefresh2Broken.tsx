import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRefresh2Broken = ({
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
      d="M8.026 3C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h3.083M21 11.352v-3.57C21 4.842 18.919 3 15.974 3H12M7.363 16.135h.523M12.22 12H3.023M7.363 7.865h.523m4.215 0h4.534M16.727 18.96h-1.946v1.81M20.755 14.201v1.946h-1.946"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.327 19.144a3.15 3.15 0 0 1-2.734 1.576c-1.742 0-2.812-1.751-2.812-1.751M14.85 15.992a3.15 3.15 0 0 1 2.743-1.586c2.112 0 3.163 1.752 3.163 1.752"
    />
  </Svg>
);
export default IconlystServerRefresh2Broken;
