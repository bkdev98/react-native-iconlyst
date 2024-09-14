import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSettingTwoTone = ({
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
      d="M21.5 11.352v-3.57C21.5 4.842 19.419 3 16.474 3H8.526C5.581 3 3.5 4.834 3.5 7.782v8.434C3.5 19.165 5.581 21 8.526 21h3.083M12.72 12H3.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 16.136h.523M7.863 7.865h.523m4.216 0h4.534"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.805 17.508a2.329 2.329 0 1 1-4.658 0 2.329 2.329 0 0 1 4.658 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.477 14.017v1.163m0 4.656V21m-3.024-5.238 1.008.582m4.032 2.328 1.008.582m-6.048 0 1.008-.582m4.032-2.328 1.008-.582"
    />
  </Svg>
);
export default IconlystServerSettingTwoTone;