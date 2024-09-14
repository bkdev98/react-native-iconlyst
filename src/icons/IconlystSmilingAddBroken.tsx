import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingAddBroken = ({
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
      d="M3.25 15.973C3.25 18.918 5.084 21 8.032 21h8.433c2.95 0 4.784-2.082 4.784-5.027v-5.028M13.547 3H8.032C5.092 3 3.25 5.081 3.25 8.026v4.434"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.355 14.352c.72.937 1.78 1.521 2.958 1.521 1.177 0 2.238-.584 2.958-1.521M21.25 5.15h-4.297M19.1 7.304V3"
    />
  </Svg>
);
export default IconlystSmilingAddBroken;
