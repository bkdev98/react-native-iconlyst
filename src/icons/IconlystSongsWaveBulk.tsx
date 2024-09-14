import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveBulk = ({
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
      <Path d="M12.57 21.882a1 1 0 0 1-1-1V3.118a1 1 0 0 1 2 0v17.764a1 1 0 0 1-1 1M21.537 14.963a1 1 0 0 1-1-1v-4.21a1 1 0 0 1 2 0v4.21a1 1 0 0 1-1 1M2.603 14.248a1 1 0 0 0 2 0v-4.212a1 1 0 0 0-2 0z" />
    </G>
    <Path
      fill={props.color}
      d="M8.086 18.695a1 1 0 0 1-1-1V6.443a1 1 0 0 1 2 0v11.252a1 1 0 0 1-1 1M16.052 17.556a1 1 0 0 0 2 0V6.304a1 1 0 1 0-2 0z"
    />
  </Svg>
);
export default IconlystSongsWaveBulk;
