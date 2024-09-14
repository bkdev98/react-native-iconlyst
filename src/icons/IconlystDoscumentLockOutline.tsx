import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoscumentLockOutline = ({
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
      d="M11.645 22.033H8.271a4.5 4.5 0 0 1-4.4-4.6V6.941a4.525 4.525 0 0 1 4.5-4.408h5.666a2.81 2.81 0 0 1 2.02.862l3.791 3.95c.503.52.783 1.215.781 1.938v8.165a4.543 4.543 0 0 1-4.377 4.584zm-3.272-18a3.014 3.014 0 0 0-3 2.926v10.49a3 3 0 0 0 2.937 3.083h7.91a3.045 3.045 0 0 0 2.907-3.08v-8.17c0-.336-.13-.658-.363-.9l-3.79-3.949a1.3 1.3 0 0 0-.939-.4z"
    />
    <Path
      fill={props.color}
      d="M13.527 17.918H10.79a2.11 2.11 0 0 1-2.108-2.108v-1.536a2.11 2.11 0 0 1 2.108-2.108h2.736a2.11 2.11 0 0 1 2.109 2.108v1.536a2.11 2.11 0 0 1-2.11 2.108m-2.736-4.252a.61.61 0 0 0-.608.608v1.536a.61.61 0 0 0 .608.608h2.736a.61.61 0 0 0 .609-.608v-1.536a.61.61 0 0 0-.61-.608z"
    />
    <Path
      fill={props.color}
      d="M13.792 13.692a.75.75 0 0 1-.75-.75v-1.01a.855.855 0 0 0-.893-.864.88.88 0 0 0-.873.868v1.006a.75.75 0 0 1-1.5 0v-1.018a2.373 2.373 0 0 1 2.354-2.356h.031a2.386 2.386 0 0 1 2.381 2.353v1.021a.75.75 0 0 1-.75.75M19.814 9.55h-2.738a3.316 3.316 0 0 1-3.3-3.312V3.346a.75.75 0 1 1 1.5 0v2.893a1.813 1.813 0 0 0 1.806 1.81h2.736a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDoscumentLockOutline;
