import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSeenCheckmarkOutline = ({
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
      d="M20.78 7.664a.75.75 0 0 1 0 1.06l-7.473 7.473a1.22 1.22 0 0 1-1.724.001l-3.571-3.571a.75.75 0 0 1 1.06-1.06l3.372 3.371 7.275-7.274a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.098 7.664a.75.75 0 0 1 0 1.06l-3.122 3.123a.75.75 0 1 1-1.061-1.06l3.122-3.123a.75.75 0 0 1 1.06 0M3.72 11.957a.75.75 0 0 1 1.06 0l2.982 2.982 1.811-1.811a.75.75 0 1 1 1.06 1.06l-2.01 2.01a1.22 1.22 0 0 1-1.722 0l-3.181-3.18a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSeenCheckmarkOutline;
