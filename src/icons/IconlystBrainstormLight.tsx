import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainstormLight = ({
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
      d="M6.658 5.188c1.069 0 2.001.585 2.5 1.455M3.775 16.027c0-1.296.845-2.394 2.01-2.767"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18.645A2.25 2.25 0 0 1 9.76 20.9a2.246 2.246 0 0 1-2.234-2.103 2.9 2.9 0 0 1-.868.134 2.893 2.893 0 0 1-2.883-2.903c0-.728.265-1.392.705-1.902A2.16 2.16 0 0 1 3 12.07c0-.965.628-1.782 1.494-2.06a2.9 2.9 0 0 1-.719-1.918 2.893 2.893 0 0 1 2.883-2.903c.3 0 .59.046.862.132A2.247 2.247 0 0 1 9.76 3.1C10.997 3.1 12 4.11 12 5.355M17.342 5.188c-.944 0-1.783.457-2.309 1.164M17.342 18.925a2.87 2.87 0 0 1-2.309-1.163"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.658 18.925c.944 0 1.783-.457 2.309-1.163M20.225 16.027c0-1.24-.773-2.3-1.861-2.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 18.645a2.25 2.25 0 0 0 2.24 2.255 2.246 2.246 0 0 0 2.234-2.103c.274.087.566.134.867.134 1.593 0 2.884-1.3 2.884-2.903 0-.728-.265-1.392-.705-1.902A2.16 2.16 0 0 0 21 12.07c0-.965-.628-1.782-1.494-2.06.448-.512.719-1.183.719-1.918a2.893 2.893 0 0 0-2.884-2.903c-.3 0-.59.046-.861.132a2.247 2.247 0 0 0-2.24-2.22A2.25 2.25 0 0 0 12 5.355"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.95 15.42 1.862-3.419h-3.703l1.86-3.42"
    />
  </Svg>
);
export default IconlystBrainstormLight;
