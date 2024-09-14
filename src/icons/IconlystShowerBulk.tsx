import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowerBulk = ({
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
      d="M15.402 7.276v-.928c0-.944-.41-1.839-1.124-2.458a3.23 3.23 0 0 0-2.584-.754l-4.486.64a3.254 3.254 0 0 0-2.795 3.212v10.78a.75.75 0 0 0 1.5 0V6.988a1.75 1.75 0 0 1 1.503-1.727l4.492-.64c.5-.075 1.006.073 1.39.404.384.333.604.815.604 1.323v.9z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.246 8.555a4.9 4.9 0 0 1 2.656-1.309l1.5.03c2.381.376 4.185 2.457 4.185 4.982 0 .74-.6 1.34-1.337 1.34h-7.196a1.34 1.34 0 0 1-1.337-1.34v-.13c0-1.364.543-2.63 1.529-3.573"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.873 20.108a.75.75 0 0 0-.75.75v.99a.75.75 0 0 0 1.5 0v-.99a.75.75 0 0 0-.75-.75M11.873 15.328a.75.75 0 0 0-.75.75v2.16a.75.75 0 0 0 1.5 0v-2.16a.75.75 0 0 0-.75-.75M14.652 18.429a.75.75 0 0 0-.75.75v1.319a.75.75 0 0 0 1.5 0v-1.32a.75.75 0 0 0-.75-.75M17.43 15.328a.75.75 0 0 0-.75.75v2.16a.75.75 0 0 0 1.5 0v-2.16a.75.75 0 0 0-.75-.75M14.652 15.328a.75.75 0 0 0-.75.75v.48a.75.75 0 1 0 1.5 0v-.48a.75.75 0 0 0-.75-.75M17.43 20.108a.75.75 0 0 0-.75.75v.99a.75.75 0 0 0 1.5 0v-.99a.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystShowerBulk;
