import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoMenuBroken = ({
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
      d="M12.25 21h3.974c2.945 0 5.026-1.835 5.026-4.783V7.782C21.25 4.842 19.169 3 16.224 3H8.276C5.331 3 3.25 4.834 3.25 7.782v8.434C3.25 19.165 5.331 21 8.276 21h.353"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.089 12.028v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .521 0M12.189 12.028v.064m.259-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .522 0M8.288 12.028v.064m.26-.05a.26.26 0 1 1-.522 0 .26.26 0 0 1 .521 0"
    />
  </Svg>
);
export default IconlystInfoMenuBroken;
