import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GSquareBroken = ({
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
      d="M7.782 13.956c.293.445.783.744 1.358.744.922 0 1.67-.747 1.67-1.668a1.35 1.35 0 0 0-1.35-1.35H7.976l.27-2.38h2.332M16.883 9.598a2.7 2.7 0 0 0-1.054-.275c-1.401-.07-2.563 1.139-2.62 2.54-.064 1.543.96 2.817 2.485 2.817.894 0 1.53-.319 1.53-1.212V12h-1.53"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.719 21c2.949 0 4.784-2.081 4.784-5.026V8.026C21.503 5.081 19.668 3 16.72 3H8.285c-2.94 0-4.782 2.081-4.782 5.026v7.948C3.503 18.919 5.336 21 8.285 21h4.721"
    />
  </Svg>
);
export default Iconlyst5GSquareBroken;
