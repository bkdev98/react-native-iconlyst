import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutline = ({
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
      d="M16.896 10.094c-.682 0-1.234.552-1.234 1.234v1.094c0 .682.552 1.234 1.234 1.234h4.354a.75.75 0 1 1 0 1.5h-4.354a2.733 2.733 0 0 1-2.734-2.734v-1.094a2.733 2.733 0 0 1 2.734-2.734h4.354a.75.75 0 1 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.493 11.82a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.185 4.185 0 0 0 4 8.622v6.75a4.185 4.185 0 0 0 4.186 4.185h8.128a4.185 4.185 0 0 0 4.186-4.185v-6.75a4.185 4.185 0 0 0-4.186-4.185zM2.5 8.622a5.685 5.685 0 0 1 5.686-5.685h8.128A5.685 5.685 0 0 1 22 8.622v6.75a5.686 5.686 0 0 1-5.686 5.685H8.186A5.685 5.685 0 0 1 2.5 15.374z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletOutline;
