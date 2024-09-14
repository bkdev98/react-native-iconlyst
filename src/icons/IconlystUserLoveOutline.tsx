import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoveOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M10.938 14.425a5.451 5.451 0 1 1 5.45-5.45 5.46 5.46 0 0 1-5.45 5.45m0-9.4a3.951 3.951 0 1 0-.002 7.907 3.951 3.951 0 0 0 .002-7.909z"
    />
    <Path
      fill={props.color}
      d="M4.527 21.054a.75.75 0 0 1-.738-.621 8.6 8.6 0 0 1-.08-1.646v-.427a5.155 5.155 0 0 1 5.149-5.15h4.283q.563.002 1.113.122a.75.75 0 1 1-.323 1.465 3.7 3.7 0 0 0-.79-.086H8.858a3.653 3.653 0 0 0-3.65 3.649l-.004.45q-.034.686.059 1.365a.75.75 0 0 1-.736.879M17.394 22.164a.73.73 0 0 1-.358-.092c-.261-.141-2.566-1.441-3.174-3.33a2.715 2.715 0 0 1 1.627-3.507 2.6 2.6 0 0 1 1.908.125 2.62 2.62 0 0 1 1.9-.126 2.716 2.716 0 0 1 1.632 3.509c-.587 1.869-2.91 3.187-3.171 3.33a.75.75 0 0 1-.364.09m-2.1-3.882c.46.945 1.19 1.73 2.1 2.256a5.24 5.24 0 0 0 2.1-2.25 1.23 1.23 0 0 0-.658-1.627 1.1 1.1 0 0 0-.994.17.75.75 0 0 1-.9 0 1.1 1.1 0 0 0-1-.168 1.23 1.23 0 0 0-.657 1.62z"
    />
  </Svg>
);
export default IconlystUserLoveOutline;
