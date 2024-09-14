import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBusFrontOutline = ({
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
      fillRule="evenodd"
      d="M3.623 6.179a2.75 2.75 0 0 1 2.75-2.75h11.753a2.75 2.75 0 0 1 2.75 2.75V21.59a.75.75 0 0 1-1.5 0V6.179c0-.69-.56-1.25-1.25-1.25H6.374c-.69 0-1.25.56-1.25 1.25V21.59a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.634 13.869a.75.75 0 0 1 .853-.631c5.213.78 10.298.78 15.526 0a.75.75 0 1 1 .221 1.483 53.3 53.3 0 0 1-15.969 0 .75.75 0 0 1-.63-.852M3.25 8.302a.25.25 0 0 0-.25.25v2.14a.75.75 0 0 1-1.5 0v-2.14c0-.966.783-1.75 1.75-1.75h18c.966 0 1.75.783 1.75 1.75v2.14a.75.75 0 1 1-1.5 0v-2.14a.25.25 0 0 0-.25-.25zM6.445 17.168a.946.946 0 1 1 1.891 0 .946.946 0 0 1-1.891 0m9.719 0a.946.946 0 1 1 1.891 0 .946.946 0 0 1-1.891 0M6.488 20.762c0-.966.784-1.75 1.75-1.75h8.013c.967 0 1.75.784 1.75 1.75v.829a.75.75 0 0 1-1.5 0v-.829a.25.25 0 0 0-.25-.25H8.238a.25.25 0 0 0-.25.25v.829a.75.75 0 0 1-1.5 0zM10.186 17.168a.75.75 0 0 1 .75-.75h2.629a.75.75 0 0 1 0 1.5h-2.63a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBusFrontOutline;
