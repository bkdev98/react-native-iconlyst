import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDFailBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21 14.781a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.143 3.14h-1.289a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M8.15 20.25H6.893a3.145 3.145 0 0 1-3.143-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.643 4.64H8.15a.75.75 0 0 0 0-1.5M3 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.29a.75.75 0 0 0 0-1.5h-1.29A4.647 4.647 0 0 0 2.25 6.89v1.58c0 .414.336.75.75.75M17.107 2.251H15.85a.75.75 0 0 0 0 1.5h1.257a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.439 9.23a1 1 0 0 0 1-1v-.609a1 1 0 1 0-2 0v.61a1 1 0 0 0 1 1M7.561 7.621v.61a1 1 0 1 0 2 0v-.61a1 1 0 1 0-2 0M16.2 17.03a1 1 0 0 0-.11-1.41c-2.623-2.241-5.446-2.244-8.163-.012a.998.998 0 0 0 .634 1.773 1 1 0 0 0 .634-.228c1.98-1.623 3.704-1.628 5.594-.013a1 1 0 0 0 1.41-.11M11.556 13.23a1 1 0 0 0 .528-.15l.305-.192c.727-.455 1.08-1.102 1.08-1.978V8.94a1 1 0 1 0-2 0v1.97c0 .195-.003.197-.14.282l-.303.19a1 1 0 0 0 .53 1.848"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDFailBulk;
