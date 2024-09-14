import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3Light = ({
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
      d="M17.048 7.186h1.333C19.992 7.186 21 8.32 21 9.94v4.356c0 1.61-1.008 2.753-2.62 2.753H5.619C4.008 17.05 3 15.906 3 14.296V9.94c0-1.611 1.008-2.754 2.618-2.754h4.802M6.625 17.053l-.393 1.385M17.377 17.053l.392 1.385M6.396 10.67v1.448"
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
export default IconlystProjectorScreen3Light;
