import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen3TwoTone = ({
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
      d="M17.548 7.186h1.333c1.611 0 2.619 1.134 2.619 2.754v4.356c0 1.61-1.008 2.753-2.62 2.753H6.119c-1.61 0-2.618-1.143-2.618-2.753V9.94c0-1.611 1.008-2.754 2.618-2.754h4.802"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.125 17.053-.393 1.385M17.877 17.053l.392 1.385M6.896 10.67v1.448"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.235 5.563a4.2 4.2 0 1 1-.001 8.4 4.2 4.2 0 0 1 0-8.4"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.606 9.763a1.63 1.63 0 1 0 1.63-1.63"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystProjectorScreen3TwoTone;
