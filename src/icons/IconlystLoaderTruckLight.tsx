import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoaderTruckLight = ({
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
      d="M11.321 16.31h-3.38M14.258 11.08h-5.34M6.531 14.43v-8a.65.65 0 0 1 .64-.65h2.9a1.62 1.62 0 0 1 1.34.71l2.6 4.08c.198.276.3.61.29.95v3.13M4.11 16.33H2.25v-3.67a1.72 1.72 0 0 1 1.72-1.72h2.56M22.25 16.3h-3.48a2 2 0 0 1-1.46-.61v0a2 2 0 0 1-.57-1.42v-2.76h2l2.92 4.79M14.4 11.99l2.34 1.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.031 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82M13.289 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82"
    />
  </Svg>
);
export default IconlystLoaderTruckLight;
