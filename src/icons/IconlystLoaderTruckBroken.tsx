import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoaderTruckBroken = ({
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
      d="M11.071 16.31h-3.38M14.051 14.65v-3.13a1.55 1.55 0 0 0-.29-.95l-2.6-4.08a1.62 1.62 0 0 0-1.34-.71h-2.9a.65.65 0 0 0-.64.65v2M6.281 14.43v-3.472"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.86 16.33H2v-3.67a1.72 1.72 0 0 1 1.72-1.72h6.64M22 16.3h-.59m0 0h-2.89a2 2 0 0 1-1.46-.61 2 2 0 0 1-.57-1.42v-2.76h2l.73 1.198m2.19 3.592-.73-1.197M14.15 11.99l2.34 1.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.781 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82M13.039 18.22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82"
    />
  </Svg>
);
export default IconlystLoaderTruckBroken;
