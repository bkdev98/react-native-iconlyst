import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanningLoadBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.999 15.116a.75.75 0 0 0-.75.75v1.57c0 1.731-1.41 3.14-3.143 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.647 4.647 0 0 0 4.643-4.64v-1.57a.75.75 0 0 0-.75-.75M8.15 20.575H6.89a3.144 3.144 0 0 1-3.142-3.14v-1.569a.75.75 0 0 0-1.5 0v1.57a4.646 4.646 0 0 0 4.642 4.64H8.15a.75.75 0 0 0 0-1.5M2.999 9.545a.75.75 0 0 0 .75-.75v-1.57a3.15 3.15 0 0 1 3.143-3.15H8.18a.75.75 0 0 0 0-1.5H6.89a4.65 4.65 0 0 0-4.642 4.65v1.57c0 .414.336.75.75.75M17.108 2.575H15.85a.75.75 0 0 0 0 1.5h1.258a3.15 3.15 0 0 1 3.143 3.15v1.571a.75.75 0 0 0 1.5 0v-1.57a4.65 4.65 0 0 0-4.643-4.65" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.254 14.511a1 1 0 0 0-1.411-.087 2.793 2.793 0 0 1-4.631-2.101 1 1 0 1 0-2 0 4.795 4.795 0 0 0 7.955 3.6 1 1 0 0 0 .087-1.412M8.743 10.145a1 1 0 0 0 1.412.088 2.78 2.78 0 0 1 1.844-.69 2.79 2.79 0 0 1 2.788 2.78 1 1 0 1 0 2 0 4.79 4.79 0 0 0-4.788-4.78 4.78 4.78 0 0 0-3.168 1.19 1 1 0 0 0-.088 1.412"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScanningLoadBulk;
