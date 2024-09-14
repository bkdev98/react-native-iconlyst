import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanDeliveryBoxBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.848 14.78a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.143 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.643-4.64v-1.58a.75.75 0 0 0-.75-.75M9 20.25H7.742A3.145 3.145 0 0 1 4.6 17.11v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.642 4.64H9a.75.75 0 0 0 0-1.5M3.85 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.142-3.14h1.29a.75.75 0 0 0 0-1.5h-1.29A4.647 4.647 0 0 0 3.1 6.89v1.58c0 .414.336.75.75.75M17.956 2.25H16.7a.75.75 0 0 0 0 1.5h1.257A3.145 3.145 0 0 1 21.1 6.89v1.58a.75.75 0 0 0 1.5 0V6.89a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.032 10.142c.007-.131.15-.192.263-.127L12 12.158a.2.2 0 0 1 .1.173v4.489a.193.193 0 0 1-.271.18c-1.007-.454-1.971-1.16-2.919-1.705a1.8 1.8 0 0 1-.88-1.54v-3.52zM16.43 8.492a.2.2 0 0 1 0 .347l-3.38 1.95a.4.4 0 0 1-.4.001L9.262 8.839a.2.2 0 0 1 0-.347l2.698-1.547a1.77 1.77 0 0 1 1.78 0zM17.67 10.235v3.52c0 .63-.34 1.22-.89 1.54-.944.545-1.904 1.251-2.908 1.704a.193.193 0 0 1-.272-.18v-4.498a.2.2 0 0 1 .1-.173l3.706-2.133c.113-.066.256-.005.262.126q.002.047.002.094"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanDeliveryBoxBulk;
