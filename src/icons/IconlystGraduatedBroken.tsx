import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraduatedBroken = ({
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
      d="m11.473 14.368-.107-.053m0 0-6.735-3.292c-1.464-.715-1.464-2.8-.001-3.515m6.736 6.807a3.1 3.1 0 0 0 2.52-.091l6.54-3.197c1.463-.715 1.463-2.801 0-3.516l-6.544-3.197a3.09 3.09 0 0 0-2.716 0L7.898 5.91m3.468 8.404a3 3 0 0 1-.206-.091l-4.155-2.031M21.533 9.26l-.033 5.414"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.006 12.193v4.971a2.13 2.13 0 0 0 1.299 1.972c2.775 1.145 5.538 1.16 8.29.006a2.13 2.13 0 0 0 1.289-1.966v-2.384"
    />
  </Svg>
);
export default IconlystGraduatedBroken;
