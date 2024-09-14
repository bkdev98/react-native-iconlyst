import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCheckCompleteBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M10.914 20.25a1 1 0 0 0 2 0V3.75a1 1 0 0 0-2 0zM19.243 11.685a1 1 0 0 0 2 0V9.913a1 1 0 0 0-2 0zM3.585 15.087a1 1 0 0 1-1-1v-3.91a1 1 0 0 1 2 0v3.91a1 1 0 0 1-1 1" />
    </G>
    <Path
      fill={props.color}
      d="M16.078 14.072a1 1 0 0 1-1-1V6.709a1 1 0 0 1 2 0v6.363a1 1 0 0 1-1 1M6.75 17.29a1 1 0 0 0 2 0V6.84a1 1 0 0 0-2 0zM16.994 19.53a.997.997 0 0 0 1.414 0l3.854-3.854a.999.999 0 1 0-1.414-1.414L17.7 17.409l-.834-.834a.999.999 0 1 0-1.414 1.414z"
    />
  </Svg>
);
export default IconlystSongsWaveCheckCompleteBulk;
