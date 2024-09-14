import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownEnterBulk = ({
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
      d="m9.189 15.779 2.28 2.28a.75.75 0 0 0 1.06 0l2.28-2.28a.75.75 0 0 0-.565-1.28v-.002H12.75V10.79h-1.5v3.706H9.638v.006a.747.747 0 0 0-.668.746c0 .192.074.384.22.53"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M20.85 15.73v1.801a4.355 4.355 0 0 1-4.35 4.35h-9a4.354 4.354 0 0 1-4.35-4.35v-1.8a.75.75 0 0 1 1.5 0v1.8a2.85 2.85 0 0 0 2.85 2.85h9a2.85 2.85 0 0 0 2.85-2.85v-1.8a.75.75 0 0 1 1.5 0M6.399 10.792h11.2c1.655 0 3-1.346 3-3v-2.17c0-1.655-1.345-3-3-3H6.4c-1.654 0-3 1.345-3 3v2.17c0 1.654 1.346 3 3 3" />
    </G>
  </Svg>
);
export default IconlystDownEnterBulk;
