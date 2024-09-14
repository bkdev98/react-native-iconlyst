import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawerBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M21.5 10.326a.3.3 0 0 1-.3.3H2.8a.3.3 0 0 1-.3-.3v-2.32c0-2.567 1.653-4.29 4.112-4.29h10.776c2.46 0 4.112 1.723 4.112 4.29zM2.5 12.426a.3.3 0 0 1 .3-.3h18.4a.3.3 0 0 1 .3.3v1.58c0 1.854-.868 3.256-2.268 3.901-.599.322-.984.43-1.846.398H6.611a4.6 4.6 0 0 1-1.843-.396c-1.4-.646-2.268-2.05-2.268-3.903z" />
    </G>
    <Path
      fill={props.color}
      d="M13.03 7.076h-2.06a.75.75 0 0 0 0 1.5h2.06a.75.75 0 0 0 0-1.5M10.97 15.216h2.06a.75.75 0 0 0 0-1.5h-2.06a.75.75 0 0 0 0 1.5M5.518 20.285a.75.75 0 0 0 .75-.75v-1.257a4.3 4.3 0 0 1-1.5-.368v1.625c0 .414.336.75.75.75M19.233 17.91v1.625a.75.75 0 0 1-1.5 0v-1.257a4.3 4.3 0 0 0 1.5-.369"
    />
  </Svg>
);
export default IconlystDrawerBulk;
