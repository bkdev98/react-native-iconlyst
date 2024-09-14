import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GSquareTwoTone = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.333 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.78 13.956c.292.445.782.744 1.358.744.921 0 1.668-.747 1.668-1.668a1.35 1.35 0 0 0-1.35-1.35H7.974l.27-2.38h2.332M16.88 9.598a2.7 2.7 0 0 0-1.054-.275c-1.4-.07-2.563 1.139-2.62 2.54-.064 1.543.96 2.817 2.485 2.817.894 0 1.53-.319 1.53-1.212V12h-1.53"
    />
  </Svg>
);
export default Iconlyst5GSquareTwoTone;
