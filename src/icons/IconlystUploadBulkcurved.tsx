import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadBulkcurved = ({
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
      d="M16.65 7.287c-1.12-.08-2.3-.12-3.53-.13h-1.5c-1.21.01-2.47.06-3.77.13h-.02c-4.03.37-5.33 2.2-5.33 7.5 0 7.6 2.85 7.6 9.75 7.6s9.75 0 9.75-7.6c0-5.3-1.3-7.13-5.35-7.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13 4.17 1.639 1.642a.747.747 0 0 0 1.06.002.75.75 0 0 0 .002-1.06l-2.92-2.929a.77.77 0 0 0-1.062 0l-2.92 2.928a.75.75 0 0 0 1.062 1.06L11.5 4.168v10.237c0 .412.345.742.757.742a.74.74 0 0 0 .743-.743z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUploadBulkcurved;
