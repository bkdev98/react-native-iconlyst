import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill1Bulk = ({
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
      d="M9.58 13.124a.75.75 0 0 1 .475.949l-1.002 3.014h5.823l-.996-2.99a.75.75 0 0 1 1.423-.475l1.309 3.928a1 1 0 0 1 .033.1l.643 1.93a.75.75 0 0 1-1.423.475l-.489-1.468H8.554l-.487 1.467a.75.75 0 0 1-1.424-.473L8.631 13.6a.75.75 0 0 1 .948-.476"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M3.25 4.182a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 .75.75v2.105l-.001.154H8.169a.75.75 0 1 0 0 1.5h12.425a8.76 8.76 0 0 1-5.066 6.357l-1.42.484a8.8 8.8 0 0 1-2.107.256c-.752 0-1.48-.095-2.177-.273L8.41 14.27A8.75 8.75 0 0 1 3.25 6.287z"
    />
  </Svg>
);
export default IconlystGrill1Bulk;
