import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletTransferOutline = ({
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
      d="M17.703 10.273a1.61 1.61 0 0 0 0 3.217h3.546a.75.75 0 0 1 0 1.5h-3.546a3.109 3.109 0 0 1 0-6.217h3.546a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.782 11.828a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.079 5.008A3.85 3.85 0 0 0 5.23 8.856v1.031a.75.75 0 0 1-1.5 0v-1.03a5.35 5.35 0 0 1 5.349-5.35h7.573A5.35 5.35 0 0 1 22 8.858v6.288a5.35 5.35 0 0 1-5.348 5.348h-2.316a.75.75 0 0 1 0-1.5h2.316a3.85 3.85 0 0 0 3.848-3.848V8.856a3.85 3.85 0 0 0-3.848-3.848z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.612 13.332a.75.75 0 0 1 .75.75v5.554a.75.75 0 0 1-1.5 0v-5.554a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.341 17.444a.75.75 0 0 1 1.06-.019l1.213 1.17 1.212-1.17a.75.75 0 0 1 1.042 1.08l-1.733 1.671a.75.75 0 0 1-1.042 0L7.36 18.505a.75.75 0 0 1-.019-1.06M4.983 13.332a.75.75 0 0 1 .75.75v5.554a.75.75 0 0 1-1.5 0v-5.554a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.462 13.542a.75.75 0 0 1 1.042 0l1.733 1.672a.75.75 0 0 1-1.041 1.08l-1.213-1.17-1.212 1.17a.75.75 0 1 1-1.042-1.08z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletTransferOutline;
