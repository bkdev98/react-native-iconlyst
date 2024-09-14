import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChangingBulk = ({
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
      d="M18.907 13.721h-1.84a2.935 2.935 0 0 0-2.93 2.932v1.84a2.935 2.935 0 0 0 2.93 2.93h1.84a2.935 2.935 0 0 0 2.932-2.93v-1.84a2.936 2.936 0 0 0-2.932-2.932M6.05 10.406h1.84a2.935 2.935 0 0 0 2.93-2.93v-1.84a2.935 2.935 0 0 0-2.93-2.932H6.05a2.935 2.935 0 0 0-2.931 2.931v1.84a2.935 2.935 0 0 0 2.93 2.931"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.019 20.046a6.777 6.777 0 0 1-6.77-6.77.75.75 0 1 0-1.5 0c0 4.56 3.71 8.27 8.27 8.27a.75.75 0 0 0 0-1.5M13.98 2.454a.75.75 0 0 0 0 1.5 6.78 6.78 0 0 1 6.77 6.77.75.75 0 1 0 1.5 0c0-4.56-3.71-8.27-8.27-8.27" />
    </G>
  </Svg>
);
export default IconlystChangingBulk;
