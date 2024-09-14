import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoaderTruckTwoTone = ({
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
      d="M11.571 16.31h-3.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.508 11.08h-5.34"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.781 14.43v-8a.65.65 0 0 1 .64-.65h2.9a1.62 1.62 0 0 1 1.34.71l2.6 4.08c.198.276.3.61.29.95v3.13M4.36 16.33H2.5v-3.67a1.72 1.72 0 0 1 1.72-1.72h2.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22.5 16.3h-3.48a2 2 0 0 1-1.46-.61 2 2 0 0 1-.57-1.42v-2.76h2l2.92 4.79m-7.26-4.31 2.34 1.73"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.281 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82M13.539 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82"
    />
  </Svg>
);
export default IconlystLoaderTruckTwoTone;
