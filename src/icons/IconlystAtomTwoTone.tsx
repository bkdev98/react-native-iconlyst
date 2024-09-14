import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtomTwoTone = ({
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
      d="M17.49 7.61c.302-1.539.133-2.706-.581-3.17a1.42 1.42 0 0 0-.845-.21c-1.735.066-4.534 2.454-6.822 5.976-2.71 4.175-3.674 8.358-2.15 9.347.724.47 1.876.137 3.179-.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.88 14.434c1.287-.499 2.078-1.182 2.119-1.967.095-1.814-3.854-3.494-8.824-3.755a24 24 0 0 0-1.853-.025M7.34 8.973c-2.548.45-4.277 1.386-4.338 2.554-.041.783.672 1.542 1.895 2.173"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.49 7.61c.302-1.539.133-2.706-.581-3.17a1.42 1.42 0 0 0-.845-.21c-1.735.066-4.534 2.454-6.822 5.976-2.71 4.175-3.674 8.358-2.15 9.347.724.47 1.876.137 3.179-.79"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.77 4.905a3.67 3.67 0 0 0-2.369-1.073 1.3 1.3 0 0 0-.491.134c-1.62.825-1.102 5.091 1.157 9.526s5.404 7.36 7.023 6.535c1.557-.793 1.137-4.769-.907-9.016"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.06 12.114v.051m.206-.04a.207.207 0 1 1-.415 0 .207.207 0 0 1 .415 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAtomTwoTone;
