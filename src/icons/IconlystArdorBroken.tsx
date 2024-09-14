import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArdorBroken = ({
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
      d="m8.086 12 4.586-7.814 2.132 3.777-6.872 11.852H3.5l2.293-3.907M17.76 13.193l-1.245-2.207-3.132 2.139 3.685 6.689H21.5l-2.027-3.591M13.383 13.125l-2.592 1.76M7.955 19.812l6.753-4.068"
    />
  </Svg>
);
export default IconlystArdorBroken;
