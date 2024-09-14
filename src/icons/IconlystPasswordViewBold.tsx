import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordViewBold = ({
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
      fillRule="evenodd"
      d="M10.694 10.734c0-.55.45-1.01 1.01-1.01.55 0 1.01.46 1.01 1.01 0 .56-.46 1.01-1.01 1.01-.56 0-1.01-.45-1.01-1.01m-2.9 1.01c-.56 0-1.01-.45-1.01-1.01 0-.55.45-1.01 1.01-1.01s1.01.46 1.01 1.01c0 .56-.45 1.01-1.01 1.01m7.81-2.02c.56 0 1.01.46 1.01 1.01 0 .56-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01c0-.55.45-1.01 1.01-1.01m1.73 3.07c1.197 0 2.332.433 3.302 1.185.18.14.451.054.488-.171.05-.312.08-.637.08-.974v-4.05c0-3.3-2.13-5.53-5.29-5.53h-8.43c-3.16 0-5.28 2.23-5.28 5.53v4.05c0 3.31 2.12 5.53 5.28 5.53h3.851c.206 0 .35-.204.322-.407a1.93 1.93 0 0 1 .137-1.033c1.1-2.54 3.23-4.13 5.54-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.34 19.898c-1.145 0-2.204-.81-2.88-2.18.678-1.365 1.736-2.17 2.878-2.17s2.202.805 2.881 2.17c-.677 1.37-1.736 2.18-2.88 2.18m4.394-2.477c-.913-2.112-2.555-3.373-4.396-3.373-1.839 0-3.48 1.26-4.394 3.373a.75.75 0 0 0 0 .593c.91 2.119 2.552 3.384 4.394 3.384s3.486-1.265 4.397-3.384a.75.75 0 0 0 0-.593"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.344 16.924a.755.755 0 0 0-.75.755.75.75 0 0 0 1.5 0v-.01a.746.746 0 0 0-.75-.745"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordViewBold;
