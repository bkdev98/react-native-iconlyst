import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerErrorBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8 2.5h7.9c3.35 0 5.6 2.13 5.6 5.3v3.25a.2.2 0 0 1-.2.2H2.7a.2.2 0 0 1-.2-.2V7.8c0-3.12 2.27-5.3 5.5-5.3m4.1 5.65h4.5a.749.749 0 1 0 0-1.5h-4.5c-.41 0-.75.34-.75.75s.34.75.75.75m-4.7 0h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75M14.61 15.65a.2.2 0 0 1-.2.2H12.1c-.41 0-.75.34-.75.75s.34.75.75.75h2.31c.11 0 .2.09.2.2v3.5q0 .105.007.208c.01.126-.085.242-.211.242H8c-3.29 0-5.5-2.13-5.5-5.3v-3.25c0-.11.09-.2.2-.2h12.59c.197 0 .291.28.154.423a2.98 2.98 0 0 0-.834 2.077zm-7.21 1.7h.5a.749.749 0 1 0 0-1.5h-.5c-.41 0-.75.34-.75.75s.34.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M18.489 13.522a.875.875 0 0 0-.875.874v2.9a.875.875 0 0 0 1.75 0v-2.9a.875.875 0 0 0-.875-.875M18.488 19.387a.86.86 0 1 0 .002 1.72.86.86 0 0 0-.002-1.72"
    />
  </Svg>
);
export default IconlystServerErrorBold;
