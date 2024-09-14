import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpBulkcurved = ({
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
      d="M12.543 5.118c-1.706-1.015-3.275.19-4.421 1.067-.47.36-.914.7-1.251.811-.458.15-.853.198-1.236.244-.667.08-1.356.161-2.111.802-1.209 1.027-1.207 2.655-1.205 3.963-.002 1.307-.004 2.935 1.206 3.963.754.64 1.443.722 2.11.801.383.046.778.094 1.236.245.337.111.78.451 1.25.81.831.637 1.885 1.444 3.067 1.444.447 0 .912-.115 1.39-.399 1.366-.97 1.85-2.768 1.85-6.864 0-4.15-.467-5.883-1.885-6.887"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.197 5.408a.75.75 0 1 0-1.246.836c2.31 3.447 2.31 8.077 0 11.521a.75.75 0 1 0 1.246.836c2.646-3.943 2.646-9.245 0-13.193"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.765 7.612a.75.75 0 0 0-.294 1.02 7.03 7.03 0 0 1 0 6.746.75.75 0 1 0 1.313.726c1.396-2.523 1.398-5.665 0-8.198a.75.75 0 0 0-1.02-.294"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeUpBulkcurved;
