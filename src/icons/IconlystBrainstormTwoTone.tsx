import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainstormTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M7.158 5.188c1.069 0 2.001.585 2.5 1.455M4.275 16.027c0-1.296.845-2.394 2.01-2.767" />
      <Path d="M12.5 18.645a2.25 2.25 0 0 1-2.24 2.255 2.246 2.246 0 0 1-2.234-2.103 2.9 2.9 0 0 1-.868.134 2.893 2.893 0 0 1-2.883-2.903c0-.728.265-1.392.705-1.902A2.16 2.16 0 0 1 3.5 12.07c0-.965.628-1.782 1.494-2.06a2.9 2.9 0 0 1-.719-1.918 2.893 2.893 0 0 1 2.883-2.903c.3 0 .59.046.862.132a2.247 2.247 0 0 1 2.24-2.22c1.237 0 2.24 1.009 2.24 2.255M17.842 5.188c-.944 0-1.783.457-2.309 1.164M17.842 18.925a2.87 2.87 0 0 1-2.309-1.163" />
      <Path d="M7.158 18.925c.944 0 1.783-.457 2.309-1.163M20.725 16.027c0-1.24-.773-2.3-1.861-2.715" />
      <Path d="M12.5 18.645a2.25 2.25 0 0 0 2.24 2.255 2.246 2.246 0 0 0 2.234-2.103c.274.087.566.134.867.134 1.593 0 2.884-1.3 2.884-2.903 0-.728-.265-1.392-.705-1.902a2.16 2.16 0 0 0 1.48-2.056c0-.965-.628-1.782-1.494-2.06.448-.512.719-1.183.719-1.918a2.893 2.893 0 0 0-2.884-2.903c-.3 0-.59.046-.861.132a2.247 2.247 0 0 0-2.24-2.22 2.25 2.25 0 0 0-2.24 2.255" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.45 15.42 1.862-3.419h-3.703l1.86-3.42"
    />
  </Svg>
);
export default IconlystBrainstormTwoTone;
