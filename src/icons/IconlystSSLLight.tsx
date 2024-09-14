import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSSLLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.283h8.435c2.948 0 4.782 2.082 4.782 5.027v7.947c0 2.945-1.834 5.026-4.783 5.026H7.782c-2.948 0-4.783-2.08-4.783-5.026V8.31c0-2.945 1.844-5.027 4.783-5.027"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.41 17.073h-1.733v-4.255M12.743 12.826h-.72a1.059 1.059 0 1 0 0 2.118h.15a1.06 1.06 0 0 1 0 2.12h-.75M8.299 12.826h-.72a1.059 1.059 0 1 0 0 2.118h.15a1.06 1.06 0 1 1 0 2.12H6.98M21.001 9.771h-18M11.325 6.83h-.063m-4.909 0H6.29zm2.486 0h-.063z"
    />
  </Svg>
);
export default IconlystSSLLight;
