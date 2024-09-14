import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleBulk = ({
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
      <Path d="M7.81 4.82H5.62a2.1 2.1 0 0 0-2.1 2.1v9.89c0 1.16.94 2.1 2.1 2.1h2.19a2.1 2.1 0 0 0 2.1-2.1V6.92a2.1 2.1 0 0 0-2.1-2.1M18.38 7.72h-2.19a2.1 2.1 0 0 0-2.1 2.1v5.56c0 1.16.94 2.11 2.1 2.11h2.19c1.16 0 2.1-.95 2.1-2.11V9.82a2.1 2.1 0 0 0-2.1-2.1" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.97 21a.749.749 0 1 0 1.5 0v-2.09h-1.5zM16.54 21a.749.749 0 1 0 1.5 0v-3.51h-1.5zM17.29 2.25c-.42 0-.75.33-.75.75v4.72h1.5V3c0-.42-.34-.75-.75-.75M6.72 2.25c-.42 0-.75.33-.75.75v1.82h1.5V3c0-.42-.34-.75-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandleBulk;
