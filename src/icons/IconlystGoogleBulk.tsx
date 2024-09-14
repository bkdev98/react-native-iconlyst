import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.838 13.71a9 9 0 0 0 .086-2.858.56.56 0 0 0-.557-.473h-7.805a.56.56 0 0 0-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 0 1 8.369-5.776.57.57 0 0 0 .73-.06l1.703-1.733a.56.56 0 0 0-.046-.832 8.9 8.9 0 0 0-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694C2.838 16.805 6.932 21 12 21c4.383 0 8.037-3.14 8.838-7.29"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGoogleBulk;
