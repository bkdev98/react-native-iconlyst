import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlightlyFrowningBulk = ({
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
      d="M12.5 2.5C7.261 2.5 3 6.762 3 12s4.261 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.856 10.707a2.12 2.12 0 0 1-1.683.852c-.653 0-1.266-.31-1.682-.852a.75.75 0 1 1 1.189-.914c.076.1.242.266.493.266s.417-.167.494-.266a.749.749 0 1 1 1.19.914M15.836 15.92a.75.75 0 0 1-1.05-.138c-.58-.755-1.414-1.188-2.286-1.188s-1.705.433-2.286 1.19a.75.75 0 0 1-1.05.135.75.75 0 0 1-.139-1.05c.868-1.129 2.134-1.775 3.475-1.775s2.608.647 3.474 1.774a.75.75 0 0 1-.138 1.052M8.021 10.706a.75.75 0 1 1 1.191-.912.63.63 0 0 0 .492.265c.252 0 .417-.166.492-.265a.75.75 0 1 1 1.191.912 2.12 2.12 0 0 1-1.683.853 2.12 2.12 0 0 1-1.683-.853"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlightlyFrowningBulk;
