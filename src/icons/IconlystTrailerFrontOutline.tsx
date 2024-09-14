import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrailerFrontOutline = ({
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
      d="M3.623 6.179a2.75 2.75 0 0 1 2.75-2.75h11.753a2.75 2.75 0 0 1 2.75 2.75V20.59a1.75 1.75 0 0 1-1.75 1.75H17.7a1.75 1.75 0 0 1-1.512-.868l-.388-.666a.25.25 0 0 0-.216-.124H8.913a.25.25 0 0 0-.216.124l-.389.666-.648-.378.648.378a1.75 1.75 0 0 1-1.511.868H5.373a1.75 1.75 0 0 1-1.75-1.75zm2.75-1.25c-.69 0-1.25.56-1.25 1.25V20.59c0 .138.111.25.25.25h1.424a.25.25 0 0 0 .216-.124l.388-.666.432.252-.432-.252a1.75 1.75 0 0 1 1.512-.868h6.67c.623 0 1.199.33 1.512.868l-.648.378.648-.378.389.666a.25.25 0 0 0 .216.124h1.427a.25.25 0 0 0 .25-.25V6.179c0-.69-.56-1.25-1.25-1.25zM2.25 9.588a.75.75 0 0 1 .75.75v1.761a.75.75 0 1 1-1.5 0v-1.761a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v1.761a.75.75 0 1 1-1.5 0v-1.761a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.933 9.991a2.75 2.75 0 0 1 2.75-2.751h7.134a2.75 2.75 0 0 1 2.75 2.75l-.001 3.787a.75.75 0 0 1-.64.741c-3.82.57-7.542.57-11.353 0a.75.75 0 0 1-.639-.741zm2.75-1.251c-.69 0-1.25.56-1.25 1.25v3.135c3.23.428 6.396.428 9.633 0V9.99c.001-.69-.559-1.25-1.25-1.25zM14.885 17.024a.75.75 0 0 1 .75-.75h1.717a.75.75 0 1 1 0 1.5h-1.717a.75.75 0 0 1-.75-.75M6.398 17.024a.75.75 0 0 1 .75-.75h1.718a.75.75 0 0 1 0 1.5H7.148a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrailerFrontOutline;
