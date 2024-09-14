import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailGroundBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.502 20.095-2.704-4.257c-1.33-2.106-1.012-4.705 1.07-6.022l6.704-4.27c2.093-1.318 4.575-.507 5.905 1.587M15.172 19.952l3.964-2.517c2.08-1.305 2.4-3.905 1.058-6.01l-1.187-1.876"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.277 9.447-1.279 3.829a1.62 1.62 0 0 1-1.701 1.08l-4.031-.455M3 20.094h18"
    />
  </Svg>
);
export default IconlystEmailGroundBroken;
