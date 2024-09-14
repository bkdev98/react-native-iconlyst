import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbLight = ({
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
      d="M12 18.09c.634.671 1.601 1.582 2.41 2.054.657.535 2.992 1.747 5.096-.25 2.105-1.995.729-4.612.464-5.143-.42-.844-5.162-10.018-5.162-10.018A3.15 3.15 0 0 0 12 3c-1.231 0-2.282.708-2.808 1.733 0 0-4.742 9.174-5.162 10.018-.265.531-1.64 3.148.464 5.144s4.44.784 5.096.249c.809-.472 1.776-1.383 2.41-2.054m0 0c-1.17-1.24-2.736-2.63-2.736-4.495a2.736 2.736 0 0 1 5.473 0c0 1.864-1.566 3.254-2.736 4.495"
    />
  </Svg>
);
export default IconlystAirbnbLight;
