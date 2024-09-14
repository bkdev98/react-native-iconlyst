import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageSearchLight = ({
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
      d="m20.996 15.573-3.95-2.867a3.86 3.86 0 0 0-4.816.224l-7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 15.474c.839-.77 2.145-1.999 3.92-1.043a28 28 0 0 1 2.174 1.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12.903v3.073c0 2.944 1.843 5.021 4.788 5.021h8.434c2.944 0 4.778-2.077 4.778-5.021V8.028c0-2.944-1.843-5.02-4.778-5.02h-3.324"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.063 3.008a3.063 3.063 0 1 1 0 6.125 3.063 3.063 0 0 1 0-6.125"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.147 8.313 9.69 9.85"
    />
  </Svg>
);
export default IconlystImageSearchLight;
