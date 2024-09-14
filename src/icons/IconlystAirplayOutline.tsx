import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirplayOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.334 7.232c0-2.64 2.14-4.779 4.778-4.779h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456a4.78 4.78 0 0 1-4.78 4.779.75.75 0 0 1 0-1.5 3.28 3.28 0 0 0 3.28-3.28V7.233a3.28 3.28 0 0 0-3.28-3.279H7.113a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.279.75.75 0 0 1 0 1.5 4.78 4.78 0 0 1-4.778-4.78z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.43 14.487a1.528 1.528 0 0 0-2.652-.007Zm0 0 2.72 4.774a1.53 1.53 0 0 1-1.329 2.286H9.347a1.53 1.53 0 0 1-1.324-2.294l2.755-4.773m1.306.74-.007.01-2.754 4.773-.005.01v.004q-.001.004.005.015t.01.012l.003.002h5.497l.003-.002.01-.012a.03.03 0 0 0 .006-.015v-.003l-.005-.01-2.72-4.774-.008-.01-.002-.002-.015-.003a.03.03 0 0 0-.016.003z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirplayOutline;
