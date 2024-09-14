import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSideBroken = ({
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
      d="M12.25 21h3.974c2.945 0 5.026-1.835 5.026-4.783V7.782C21.25 4.842 19.169 3 16.224 3H8.276C5.331 3 3.25 4.834 3.25 7.782v8.434C3.25 19.165 5.331 21 8.276 21h.353M3.25 15.459h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.646 8.352 2.604 2.804 2.604-2.804"
    />
  </Svg>
);
export default IconlystDownSideBroken;
