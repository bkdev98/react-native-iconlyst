import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike2TwoTone = ({
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
      d="M12.5 6.135A4.32 4.32 0 0 0 7.357 3.95c-3.333 1.073-4.52 4.701-3.504 7.878 1.637 5.088 7.353 8.417 8.649 8.417"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.501 6.135c1.14-2.162 3.383-2.736 5.136-2.185 3.332 1.073 4.529 4.701 3.512 7.877-1.582 5.03-7.352 8.418-8.648 8.418"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartLike2TwoTone;
