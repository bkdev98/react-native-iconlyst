import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.642 12.517v5.147h-1.5v-5.147z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.28 14.34h5.222v1.5H6.28zM14.386 12.628h1.604v1.5h-1.604zM16.152 16.11h1.604v1.5h-1.604zM8.578 3.285v.75a.57.57 0 0 0 .583.556h1.031c1.534.005 2.8 1.226 2.808 2.764v1.461h-1.5V7.36c-.004-.687-.576-1.267-1.312-1.27H9.161c-1.136 0-2.083-.907-2.083-2.056v-.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.487 22.785a7.666 7.666 0 0 1 0-15.332h7.525a7.666 7.666 0 1 1 0 15.332zm-6.166-7.666a6.166 6.166 0 0 0 6.166 6.166h7.525a6.166 6.166 0 1 0 0-12.332H8.487a6.166 6.166 0 0 0-6.166 6.166"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameOutlinesharp;
