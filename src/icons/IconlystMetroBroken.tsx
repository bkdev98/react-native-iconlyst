import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetroBroken = ({
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
      d="M11.785 21H7.776C4.829 21 3 18.889 3 15.97V8.02C3 5.083 4.858 3 7.777 3h8.436C19.161 3 21 5.082 21 8.02v7.95c0 2.948-1.868 5.03-4.787 5.03h-.878"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.992 15.989V8.01H8.8l3.2 7.297 3.212-7.297h.797v7.978"
    />
  </Svg>
);
export default IconlystMetroBroken;
