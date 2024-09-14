import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCheckBulk = ({
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
      d="m16.052 11.394-4.294 4.309a.75.75 0 0 1-1.062 0L8.55 13.548a.749.749 0 1 1 1.063-1.058l1.615 1.621 3.763-3.776a.749.749 0 1 1 1.062 1.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesCheckBulk;
