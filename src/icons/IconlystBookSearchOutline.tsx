import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookSearchOutline = ({
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
      d="M6.613 3.75a1.84 1.84 0 0 0-1.84 1.841v10.19a3.2 3.2 0 0 1 1.736-.505h.566V3.75zm1.962 0h9.13a.45.45 0 0 1 .448.449v.43a.75.75 0 0 0 1.5 0v-.43a1.95 1.95 0 0 0-1.949-1.949H6.614a3.34 3.34 0 0 0-3.342 3.341v12.922A3.236 3.236 0 0 0 6.51 21.75h11.202a1.95 1.95 0 0 0 1.949-1.943v-.003l-.007-3.778v-1.045a.75.75 0 1 0-1.5 0v.295H8.575zm-.768 13.026h10.347l.006 3.029a.45.45 0 0 1-.45.445H6.51a1.736 1.736 0 1 1 0-3.474zm9.452-9.28a1.969 1.969 0 1 0-.001 3.937 1.969 1.969 0 0 0 0-3.938m2.87 3.92a3.469 3.469 0 1 0-1.092 1.03l.91.908a.75.75 0 1 0 1.06-1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookSearchOutline;
