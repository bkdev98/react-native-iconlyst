import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInsuranceHandBroken = ({
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
      d="M16.749 16.364c.673-.484.973-1.193 1.204-1.945.156-.507.2-3.393.21-4.49a1.383 1.383 0 0 1 2.766-.01c.024 1.24.113 2.61.047 3.941M20.531 16.55c-.575 1.759-1.736 3.292-3.321 4.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.595 20.905c-.01-1.213.028-4.112.202-5.057.289-1.588 1.829-3.723 4.303-3.02M7.252 16.364c-.674-.484-.974-1.193-1.205-1.945-.156-.507-.2-3.393-.21-4.49a1.383 1.383 0 0 0-2.766-.01c-.024 1.231-.112 2.588-.049 3.91M3.468 16.55c.575 1.759 1.736 3.292 3.321 4.258"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.407 20.905c.01-1.213-.03-4.112-.203-5.057-.288-1.588-1.829-3.723-4.303-3.02M12.848 9.486H11.15a.484.484 0 0 1-.483-.484V7.624h-1.38a.484.484 0 0 1-.484-.484v-1.7c0-.267.217-.484.484-.484h1.38M11.151 3.094h1.697c.267 0 .484.216.484.484v1.377h1.38c.267 0 .484.217.484.484v1.7a.484.484 0 0 1-.485.484h-1.38"
    />
  </Svg>
);
export default IconlystInsuranceHandBroken;
