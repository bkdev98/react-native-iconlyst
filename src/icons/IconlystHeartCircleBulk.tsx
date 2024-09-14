import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartCircleBulk = ({
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
      d="M3 12c0-5.238 4.262-9.5 9.5-9.5S22 6.762 22 12s-4.262 9.5-9.5 9.5S3 17.238 3 12"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.508 10.201a2.64 2.64 0 0 0-1.658-1.549 2.76 2.76 0 0 0-1.306-.093c-.4.067-.764.307-1.069.53-.294-.213-.666-.457-1.069-.525a2.8 2.8 0 0 0-1.305.088c-1.673.542-2.189 2.373-1.721 3.83.729 2.338 3.867 3.824 4 3.887a.23.23 0 0 0 .19 0c.131-.061 3.223-1.522 3.996-3.885.247-.77.226-1.581-.058-2.283"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartCircleBulk;
