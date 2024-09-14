import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrezorBulk = ({
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
      d="M19.06 11.886v5.45c0 .77-.43 1.46-1.11 1.81l-4.55 2.27c-.28.14-.59.21-.9.21s-.62-.07-.9-.21l-4.55-2.27a2.03 2.03 0 0 1-1.11-1.81v-5.45c0-.83.51-1.56 1.27-1.86.08-.04.16-.07.25-.09l1.25-.31.91-.23c1.88-.47 3.88-.47 5.76 0l.91.23 1.24.31c.09.02.18.05.26.09.76.3 1.27 1.03 1.27 1.86"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.79 7.665v2.36c-.08-.04-.17-.07-.26-.09l-1.24-.31v-1.96c0-.99-.4-1.97-1.11-2.67a3.75 3.75 0 0 0-2.68-1.12c-1 0-1.98.41-2.68 1.12-.71.7-1.11 1.68-1.11 2.67v1.96l-1.25.31c-.09.02-.17.05-.25.09v-2.36c0-1.39.56-2.75 1.55-3.74 1-1 2.33-1.55 3.74-1.55s2.74.55 3.74 1.55c.99.99 1.55 2.35 1.55 3.74"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrezorBulk;
