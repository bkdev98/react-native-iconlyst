import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServer2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.334 4.285a.746.746 0 1 1 0 1.492.746.746 0 0 1 0-1.492m5.2.01h2.327a.727.727 0 0 1 0 1.454h-2.327a.727.727 0 0 1 0-1.454m-7.16 3.902h11.251c1.683 0 3.1-1.417 3.1-3.099S19.307 2 17.624 2H6.375c-1.682 0-3.1 1.416-3.1 3.098s1.418 3.099 3.1 3.099M15.861 12.65h-2.327a.728.728 0 0 1 0-1.454h2.327a.728.728 0 0 1 0 1.454m-7.528.027a.744.744 0 1 1 0-1.49.746.746 0 0 1 0 1.49m9.293-3.776H6.374c-1.682 0-3.098 1.417-3.098 3.1 0 1.681 1.416 3.097 3.098 3.097h11.252c1.682 0 3.098-1.416 3.098-3.098s-1.416-3.099-3.098-3.099M15.861 19.552h-2.327a.728.728 0 0 1 0-1.454h2.327a.728.728 0 0 1 0 1.454m-7.528.027a.744.744 0 1 1 0-1.49.745.745 0 1 1 0 1.49m9.293-3.776H6.374c-1.682 0-3.098 1.417-3.098 3.099S4.692 22 6.374 22h11.252c1.682 0 3.098-1.416 3.098-3.098s-1.416-3.1-3.098-3.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServer2Bold;
