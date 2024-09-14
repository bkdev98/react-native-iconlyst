import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbTwoTone = ({
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
      d="M12 18.09c.634.671 1.601 1.582 2.41 2.054.657.535 2.992 1.747 5.096-.25 2.105-1.995.729-4.612.464-5.143a885 885 0 0 0-2.293-4.463M12 18.09c-1.171-1.24-2.737-2.63-2.737-4.495a2.736 2.736 0 0 1 5.473 0c0 1.864-1.566 3.254-2.736 4.495m0 0c-.634.671-1.601 1.582-2.41 2.054-.656.535-2.993 1.747-5.096-.25-2.105-1.995-.729-4.612-.464-5.143.185-.371 1.207-2.356 2.293-4.463"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.676 10.288c-1.382-2.68-2.869-5.555-2.869-5.555A3.15 3.15 0 0 0 12 3c-1.23 0-2.281.708-2.807 1.733l-2.869 5.555"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAirbnbTwoTone;
