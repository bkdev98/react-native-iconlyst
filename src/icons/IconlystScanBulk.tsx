import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBulk = ({
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
      d="M21.5 12.367h-19a.749.749 0 1 0 0 1.5h.202v3.287a4.45 4.45 0 0 0 4.448 4.447h1.224a.75.75 0 0 0 0-1.5H7.15a2.95 2.95 0 0 1-2.948-2.947v-3.287H6.72v.51c0 1.85 1.23 3.13 3 3.13h4.41c1.77 0 3-1.28 3-3.13v-.51h2.671v3.287a2.95 2.95 0 0 1-2.947 2.947h-1.195a.75.75 0 0 0 0 1.5h1.195a4.45 4.45 0 0 0 4.447-4.447v-3.287h.199a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M6.72 10.227v.34a.3.3 0 0 0 .3.3h9.81a.3.3 0 0 0 .3-.3v-.34c0-1.85-1.23-3.13-3-3.13H9.72c-1.77 0-3 1.28-3 3.13M15.66 4.5h1.194a2.95 2.95 0 0 1 2.947 2.949v1.498a.75.75 0 0 0 1.5 0V7.449A4.453 4.453 0 0 0 16.854 3H15.66a.75.75 0 0 0 0 1.5M3.452 9.697a.75.75 0 0 0 .75-.75V7.449A2.95 2.95 0 0 1 7.15 4.5h1.224a.75.75 0 0 0 0-1.5H7.15a4.453 4.453 0 0 0-4.448 4.449v1.498c0 .414.336.75.75.75" />
    </G>
  </Svg>
);
export default IconlystScanBulk;
