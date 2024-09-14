import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3Broken = ({
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
      d="M10.42 7.186H5.618C4.008 7.186 3 8.329 3 9.94v4.356c0 1.61 1.008 2.753 2.618 2.753H12M17.048 7.186h1.333c1.611 0 2.62 1.134 2.62 2.754v4.356c0 1.61-1.009 2.753-2.62 2.753h-3.19M6.625 17.053l-.393 1.385M17.377 17.053l.392 1.385M6.396 10.67v1.448"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.735 5.563a4.2 4.2 0 1 1-.001 8.4 4.2 4.2 0 0 1 0-8.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.106 9.763a1.63 1.63 0 1 0 1.63-1.63"
    />
  </Svg>
);
export default IconlystProjectorScreen3Broken;
