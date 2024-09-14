import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasTreeOutline = ({
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
      d="M12 2.865a.75.75 0 0 1 .67.414c1.622 3.231 3.43 6.156 5.517 8.603a.75.75 0 0 1-.57 1.236h-1.345a20.7 20.7 0 0 0 2.915 4.057.75.75 0 0 1-.55 1.26H5.363a.75.75 0 0 1-.55-1.26 20.6 20.6 0 0 0 2.915-4.057H6.383a.75.75 0 0 1-.57-1.236C7.9 9.435 9.708 6.51 11.33 3.279a.75.75 0 0 1 .67-.414m-4.042 8.753h1.009A.75.75 0 0 1 9.64 12.7a23.7 23.7 0 0 1-2.648 4.237h10.016a23.7 23.7 0 0 1-2.648-4.237.75.75 0 0 1 .673-1.08h1.01C14.555 9.691 13.22 7.544 12 5.25c-1.22 2.295-2.554 4.442-4.042 6.368"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.865 7.715a.75.75 0 0 1 1.025-.272c1.056.614 1.89.972 2.711 1.164.82.192 1.667.229 2.763.147a.75.75 0 1 1 .111 1.496c-1.189.088-2.2.056-3.216-.182-1.014-.238-1.99-.67-3.122-1.328a.75.75 0 0 1-.272-1.025M6.58 10.97a.75.75 0 0 1 1.025-.272c1.499.87 2.699 1.388 3.89 1.667 1.19.28 2.415.33 3.973.214a.75.75 0 1 1 .11 1.496c-1.65.123-3.037.076-4.424-.25-1.385-.324-2.728-.915-4.302-1.83a.75.75 0 0 1-.272-1.025M6.79 14.717a.75.75 0 0 1 1.025-.272c2.988 1.736 5.104 2.41 7.737 2.491a.75.75 0 0 1-.046 1.5c-2.944-.091-5.303-.869-8.445-2.694a.75.75 0 0 1-.271-1.025"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.002 16.968a.75.75 0 0 1 .75.75v3.897a.75.75 0 0 1-1.5 0v-3.897a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasTreeOutline;
