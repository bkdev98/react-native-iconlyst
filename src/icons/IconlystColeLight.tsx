import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColeLight = ({
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
      d="M13.46 6.755a3.18 3.18 0 0 1 5.258 2.608M5.159 9.024a3.18 3.18 0 0 1 4.79-2.503"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.145 15.823a2.547 2.547 0 0 1 2.536-3.86 2.547 2.547 0 0 1 3.925-1.845c1.36-1.01 3.006-.915 4.394.573-.91.116-2.374 1.27-2.374 4.286-.322 3.901-3.192 5.582-6.315 5.815-3.755.28-7.151-2.797-7.28-6.63-.07-2.039-1.383-3.197-2.031-3.52.583-1.08 2.548-2.42 4.47-.649 1.962-.845 3.455.51 3.638 2.142M9.502 5.579a2.64 2.64 0 0 1 4.604-1.097"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.516 9.763a2.993 2.993 0 0 0-5.231-2.371"
    />
  </Svg>
);
export default IconlystColeLight;
