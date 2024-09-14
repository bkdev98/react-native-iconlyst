import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBulkcurved = ({
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
      d="M2 7.71c-.08 1.12-.12 2.3-.13 3.53v1.5c.01 1.21.06 2.47.13 3.77v.02c.37 4.03 2.2 5.33 7.5 5.33 7.6 0 7.6-2.85 7.6-9.75s0-9.75-7.6-9.75c-5.3 0-7.13 1.3-7.5 5.35"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.074 11.36 18.43 9.721a.747.747 0 0 1-.002-1.06.75.75 0 0 1 1.06-.002l2.929 2.92a.77.77 0 0 1 0 1.062l-2.928 2.92a.75.75 0 0 1-1.06-1.062l1.644-1.639H9.837a.753.753 0 0 1-.742-.757.74.74 0 0 1 .742-.743z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogoutBulkcurved;
