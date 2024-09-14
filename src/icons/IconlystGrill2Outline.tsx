import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.885 8.29c0-.41.336-.75.75-.75h14.729c.415 0 .75.34.75.75a8.12 8.12 0 0 1-4.79 7.41l.989 2.974.01.032.6 1.804a.75.75 0 0 1-1.423.48l-.434-1.31H8.87l-.435 1.31a.75.75 0 0 1-.948.47.75.75 0 0 1-.476-.95l1.608-4.834A8.12 8.12 0 0 1 3.885 8.29m6.151 7.881L9.37 18.18h5.199l-.663-1.995A8.1 8.1 0 0 1 12 16.41a8.1 8.1 0 0 1-1.963-.239m4.274-1.676a6.62 6.62 0 0 0 4.262-5.455H5.427a6.62 6.62 0 0 0 4.432 5.516 6.62 6.62 0 0 0 4.125.05.75.75 0 0 1 .326-.11"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.192 3.79c.293.3.294.77 0 1.06a.37.37 0 0 0 0 .52.75.75 0 1 1-1.061 1.06 1.87 1.87 0 0 1 0-2.64.756.756 0 0 1 1.06 0M16.192 3.79c.294.3.294.77.002 1.06a.37.37 0 0 0 0 .52.75.75 0 0 1-1.062 1.06 1.87 1.87 0 0 1 0-2.64.755.755 0 0 1 1.06 0M11.632 2.22a.755.755 0 0 1 1.06 0c.727.73.727 1.91 0 2.63a.373.373 0 0 0 0 .52.75.75 0 1 1-1.06 1.06 1.87 1.87 0 0 1 0-2.64.36.36 0 0 0 0-.51.75.75 0 0 1 0-1.06"
    />
  </Svg>
);
export default IconlystGrill2Outline;
