import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExcludeDashLight = ({
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
      d="M9.885 8.121H6.42c-2.107 0-3.42 1.495-3.42 3.6v5.688c0 2.105 1.305 3.59 3.42 3.59h6.03c2.114 0 3.428-1.485 3.428-3.59v-3.564"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.992 15.88c-1.623-.048-2.688-1.114-2.87-2.665M13.006 8.121c1.623.048 2.688 1.114 2.871 2.665"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.485 15.879h4.085c2.115 0 3.43-1.485 3.43-3.591V6.6C21 4.494 19.685 3 17.57 3h-6.029c-2.105 0-3.42 1.494-3.42 3.6v3.645"
    />
  </Svg>
);
export default IconlystExcludeDashLight;
