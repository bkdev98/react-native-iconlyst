import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesStarBulk = ({
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
      d="M19.773 7.075a9.53 9.53 0 0 0-6.919-3.629A9.5 9.5 0 0 0 5.58 6.22c-2.806 2.814-3.57 7.136-1.914 10.731.04.1.162.404.99 1.846a.47.47 0 0 1-.024.51c-.222.313-.503.715-.722 1.044a1.38 1.38 0 0 0-.069 1.418c.24.445.701.722 1.205.722h.002l.615-.001c2.371-.001 5.785-.003 6.603.001h.033a9.5 9.5 0 0 0 7.272-3.397c2.898-3.437 2.983-8.492.203-12.019"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.894 14.06.88-.848c.19-.18.316-.425.353-.692a1.16 1.16 0 0 0-.23-.861 1.15 1.15 0 0 0-.763-.447l-1.234-.18-.557-1.115a1.172 1.172 0 0 0-2.089.014l-.551 1.102-1.226.178a1.18 1.18 0 0 0-.687.347 1.17 1.17 0 0 0 .03 1.65l.889.854-.21 1.207c-.042.253 0 .517.118.736a1.164 1.164 0 0 0 1.579.497l1.105-.575 1.099.57c.228.122.49.165.735.122a1.175 1.175 0 0 0 .969-1.352zM12.3 11.19l.335.67c.173.341.502.578.88.632l.733.106-.523.505a1.16 1.16 0 0 0-.34 1.04l.125.722-.667-.347a1.17 1.17 0 0 0-1.085 0l-.668.347.125-.718a1.16 1.16 0 0 0-.339-1.043l-.524-.505.73-.105a1.17 1.17 0 0 0 .884-.636z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesStarBulk;
