import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathOutline = ({
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
      d="M12.433 4.508a1.63 1.63 0 0 0-1.618 1.64c0 .912.731 1.64 1.618 1.64a1.63 1.63 0 0 0 1.618-1.64 1.63 1.63 0 0 0-1.618-1.64m-3.118 1.64c0-1.728 1.39-3.14 3.118-3.14 1.729 0 3.118 1.412 3.118 3.14s-1.39 3.14-3.118 3.14-3.118-1.412-3.118-3.14M5.802 16.211a1.63 1.63 0 0 0-1.618 1.64c0 .912.73 1.64 1.618 1.64a1.63 1.63 0 0 0 1.618-1.64 1.63 1.63 0 0 0-1.618-1.64m-3.118 1.64c0-1.727 1.39-3.14 3.118-3.14s3.118 1.413 3.118 3.14-1.39 3.14-3.118 3.14-3.118-1.412-3.118-3.14m16.381-1.64a1.63 1.63 0 0 0-1.618 1.64c0 .912.731 1.64 1.618 1.64a1.63 1.63 0 0 0 1.619-1.64 1.63 1.63 0 0 0-1.619-1.64m-3.118 1.64c0-1.727 1.39-3.14 3.118-3.14 1.729 0 3.119 1.413 3.119 3.14s-1.39 3.14-3.119 3.14c-1.728 0-3.118-1.412-3.118-3.14"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.823 7.093a.75.75 0 0 1 1.022.284l4.386 7.763a.75.75 0 1 1-1.306.738L13.54 8.115a.75.75 0 0 1 .284-1.022m-2.745.04a.75.75 0 0 1 .279 1.023L6.942 15.88a.75.75 0 0 1-1.302-.744l4.414-7.724a.75.75 0 0 1 1.024-.279M7.256 18.701a.75.75 0 0 1 .75-.75h8.849a.75.75 0 0 1 0 1.5H8.006a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathOutline;
