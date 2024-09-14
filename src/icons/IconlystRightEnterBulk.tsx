import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightEnterBulk = ({
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
      d="m15.53 15.062 2.28-2.28a.75.75 0 0 0 0-1.062l-2.28-2.28a.75.75 0 0 0-1.28.566h-.003V11.5h-3.706V13h3.706v1.612h.006a.747.747 0 0 0 .746.668.75.75 0 0 0 .53-.22"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M15.48 3.4h1.8a4.355 4.355 0 0 1 4.35 4.35v9a4.354 4.354 0 0 1-4.35 4.35h-1.8a.75.75 0 0 1 0-1.5h1.8a2.85 2.85 0 0 0 2.85-2.85v-9a2.85 2.85 0 0 0-2.85-2.85h-1.8a.75.75 0 0 1 0-1.5M10.542 17.851v-11.2c0-1.655-1.347-3-3-3H5.37c-1.654 0-3 1.345-3 3v11.2c0 1.654 1.346 3 3 3h2.171c1.654 0 3-1.346 3-3" />
    </G>
  </Svg>
);
export default IconlystRightEnterBulk;
