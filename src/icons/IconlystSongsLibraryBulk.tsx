import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsLibraryBulk = ({
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
      d="M3.57 10.448h9.143a1 1 0 0 0 0-2H3.57a1 1 0 0 0 0 2M7.214 19.98H3.57a1 1 0 0 1 0-2h3.644a1 1 0 0 1 0 2M16.56 20.318a2.93 2.93 0 0 1-2.923-2.925 2.927 2.927 0 0 1 3.851-2.772v-4.467a1.001 1.001 0 0 1 1.934-.36c.016.042.493 1.189 1.663 1.427a1 1 0 1 1-.398 1.96 4 4 0 0 1-1.199-.451v4.479q0 .053-.005.104v.08a2.927 2.927 0 0 1-2.922 2.925"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M21.57 5.682h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2M9.839 15.214h-6.27a1 1 0 0 1 0-2h6.27a1 1 0 0 1 0 2" />
    </G>
  </Svg>
);
export default IconlystSongsLibraryBulk;
