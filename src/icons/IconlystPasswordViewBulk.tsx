import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordViewBulk = ({
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
      d="M17.334 12.794c1.197 0 2.332.433 3.302 1.185.18.14.451.054.488-.171.05-.312.08-.637.08-.974v-4.05c0-3.3-2.13-5.53-5.29-5.53h-8.43c-3.16 0-5.28 2.23-5.28 5.53v4.05c0 3.31 2.12 5.53 5.28 5.53h3.851c.206 0 .35-.204.322-.407a1.93 1.93 0 0 1 .137-1.033c1.1-2.54 3.23-4.13 5.54-4.13"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.784 10.733c0 .56.45 1.01 1.01 1.01s1.01-.45 1.01-1.01c0-.55-.45-1.01-1.01-1.01s-1.01.46-1.01 1.01M11.704 9.723c-.56 0-1.01.46-1.01 1.01 0 .56.45 1.01 1.01 1.01.55 0 1.01-.45 1.01-1.01 0-.55-.46-1.01-1.01-1.01M15.604 9.723c.56 0 1.01.46 1.01 1.01 0 .56-.45 1.01-1.01 1.01s-1.01-.45-1.01-1.01c0-.55.45-1.01 1.01-1.01M16.594 17.677c0-.414.336-.755.75-.755s.75.331.75.745v.01a.75.75 0 0 1-1.5 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.338 14.046c1.841 0 3.483 1.261 4.396 3.373a.75.75 0 0 1 .001.593c-.91 2.12-2.554 3.384-4.397 3.384-1.842 0-3.484-1.265-4.395-3.384a.75.75 0 0 1 .001-.593c.913-2.112 2.555-3.373 4.394-3.373m-2.879 3.671c.677 1.37 1.736 2.18 2.88 2.18s2.203-.81 2.88-2.18c-.679-1.366-1.738-2.17-2.88-2.17-1.143 0-2.2.804-2.88 2.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordViewBulk;
