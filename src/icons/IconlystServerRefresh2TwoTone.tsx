import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRefresh2TwoTone = ({
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
      d="M21.5 11.352v-3.57C21.5 4.842 19.419 3 16.474 3H8.526C5.581 3 3.5 4.834 3.5 7.782v8.434C3.5 19.165 5.581 21 8.526 21h3.083"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 16.135h.523"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.72 12H3.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 7.865h.523m4.215 0h4.534"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.227 18.96h-1.946v1.81M21.255 14.201v1.946h-1.946"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.827 19.145a3.15 3.15 0 0 1-2.734 1.576c-1.741 0-2.812-1.751-2.812-1.751M15.35 15.992a3.15 3.15 0 0 1 2.743-1.586c2.112 0 3.163 1.752 3.163 1.752"
    />
  </Svg>
);
export default IconlystServerRefresh2TwoTone;
