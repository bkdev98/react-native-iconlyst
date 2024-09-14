import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCloseRemoveBulk = ({
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
      <Path d="M11.57 20.882a1 1 0 0 0 2 0V3.118a1 1 0 0 0-2 0zM2.603 14.248a1 1 0 0 0 2 0v-4.212a1 1 0 0 0-2 0zM21.537 12.66a1 1 0 0 1-1-1V9.751a1 1 0 0 1 2 0v1.907a1 1 0 0 1-1 1" />
    </G>
    <Path
      fill={props.color}
      d="M8.086 18.695a1 1 0 0 1-1-1V6.443a1 1 0 0 1 2 0v11.252a1 1 0 0 1-1 1M16.052 12a1 1 0 0 0 2 0V6.304a1 1 0 1 0-2 0zM20.795 21.316a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.395-1.396 1.396-1.397a1 1 0 1 0-1.416-1.413L19.4 17.092l-1.396-1.396a.999.999 0 1 0-1.414 1.414l1.396 1.396-1.396 1.396a.999.999 0 1 0 1.414 1.414L19.4 19.92z"
    />
  </Svg>
);
export default IconlystSongsWaveCloseRemoveBulk;
