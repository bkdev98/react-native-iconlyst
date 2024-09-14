import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst5GSquareLight = ({
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
      d="M7.785 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H7.785c-2.949 0-4.782-2.081-4.782-5.026V8.026C3.003 5.081 4.846 3 7.785 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.282 13.956c.293.445.783.744 1.358.744.922 0 1.67-.747 1.67-1.668a1.35 1.35 0 0 0-1.35-1.35H7.476l.27-2.38h2.332M16.383 9.598a2.7 2.7 0 0 0-1.054-.275c-1.401-.07-2.563 1.139-2.62 2.54-.064 1.543.96 2.817 2.485 2.817.894 0 1.53-.319 1.53-1.212V12h-1.53"
    />
  </Svg>
);
export default Iconlyst5GSquareLight;
