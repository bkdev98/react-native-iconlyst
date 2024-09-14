import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDecredBroken = ({
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
      d="M21.201 10.683a5.694 5.694 0 0 0-5.705-5.704h-3.95L14.18 7.61h1.316c1.668 0 3.072 1.404 3.072 3.072s-1.404 3.072-3.072 3.072h-3.37l5.197 5.266H21.5l-3.37-3.247a5.74 5.74 0 0 0 2.405-2.398"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.798 13.316a5.74 5.74 0 0 1 3.072-5.09L3.5 4.978h4.176l5.196 5.265h-3.37c-1.667 0-3.071 1.404-3.071 3.072s1.404 3.072 3.071 3.072h1.317l2.633 2.633h-3.95a5.69 5.69 0 0 1-4.689-2.448"
    />
  </Svg>
);
export default IconlystDecredBroken;
