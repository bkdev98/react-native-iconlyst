import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSettingLight = ({
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
      d="M21 11.352v-3.57C21 4.842 18.919 3 15.974 3H8.026C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h3.083M12.22 12H3.023M7.363 16.136h.523M7.363 7.865h.523m4.216 0h4.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.305 17.508a2.329 2.329 0 1 1-4.658 0 2.329 2.329 0 0 1 4.658 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.977 14.017v1.163m0 4.656V21m-3.024-5.238 1.008.582m4.032 2.328 1.008.582m-6.048 0 1.008-.582m4.032-2.328L21 15.762"
    />
  </Svg>
);
export default IconlystServerSettingLight;
