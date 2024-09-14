import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M1.537 6.25a4 4 0 0 1 4-4h6.294a4 4 0 0 1 4 4v11.998a4 4 0 0 1-4 4H5.537a4 4 0 0 1-4-4z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m18.285 8.957 3.863 2.587.012.01a.95.95 0 0 1 0 1.393l-.012.01-3.863 2.587a.95.95 0 0 1-1.568-.537l-.003-.018.006-1.788h-5.586a.95.95 0 0 1 0-1.9h5.585l-.014-1.722.001-.01a.95.95 0 0 1 1.58-.611"
    />
  </Svg>
);
export default IconlystLogoutBulk;
