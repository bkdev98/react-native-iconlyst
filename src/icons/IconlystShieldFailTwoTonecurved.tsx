import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailTwoTonecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.985 22.002c2.334 0 7.672-2.322 7.672-8.727 0-6.404.278-6.905-.338-7.521s-3.825-2.607-7.334-2.607-6.719 1.99-7.335 2.607c-.616.616-.338 1.117-.338 7.52 0 6.406 5.338 8.728 7.673 8.728"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.864 14.22-3.759-3.758M10.105 14.22l3.76-3.758"
    />
  </Svg>
);
export default IconlystShieldFailTwoTonecurved;
