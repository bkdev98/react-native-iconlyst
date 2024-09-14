import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize5Bulk = ({
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
      d="m7.42 6.255 1.257.002h.002a1 1 0 0 0 .002-2L5.006 4.25h-.028q-.13.003-.25.037v.001h-.002l-.002.001h-.002l-.001.001a1.003 1.003 0 0 0-.414.24l-.001.001-.021.02-.002.003-.001.001a1 1 0 0 0-.28.67v.03l.007 3.673a1 1 0 0 0 1 .998h.002a1 1 0 0 0 .998-1.002l-.002-1.255 2.29 2.291a1 1 0 0 0 1.415-1.414zM18.99 14.57h-.001a1 1 0 0 0-.998 1.003l.002 1.256-2.29-2.29a1 1 0 0 0-1.414 1.414l2.29 2.29-1.255-.003h-.002a1 1 0 0 0-.002 2l3.673.008h.033a1 1 0 0 0 .232-.034h.002l.002-.001h.002l.002-.001a.998.998 0 0 0 .733-.949v-.02l-.008-3.674a1 1 0 0 0-1-.998"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m8.295 14.54-2.29 2.288.003-1.254a1 1 0 0 0-.998-1.002h-.002a1 1 0 0 0-1 .998L4 19.202a1 1 0 0 0 1 1.046h.004l3.675-.008a1 1 0 0 0-.002-2h-.002l-1.256.003 2.29-2.29a.999.999 0 1 0-1.414-1.414M14.998 10.252a1 1 0 0 0 .707-.293l2.289-2.288-.003 1.254a1 1 0 0 0 .997 1.002h.003a1 1 0 0 0 1-.998l.008-3.614a1 1 0 0 0-.291-.772.94.94 0 0 0-.711-.293l-3.677.008a1 1 0 0 0 .002 2h.002l1.257-.003-2.29 2.29a.999.999 0 0 0 .707 1.707" />
    </G>
  </Svg>
);
export default IconlystResize5Bulk;
