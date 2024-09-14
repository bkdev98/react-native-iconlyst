import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLibraryAddPlusBulk = ({
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
      d="M3.57 10.617h9.143a1 1 0 0 0 0-2H3.57a1 1 0 0 0 0 2M7.214 20.148H3.57a1 1 0 0 1 0-2h3.644a1 1 0 0 1 0 2M16.499 19.148a1 1 0 0 0 2 0V17.07h2.078a1 1 0 0 0 0-2h-2.078v-2.078a1 1 0 0 0-2 0v2.078h-2.077a1 1 0 0 0 0 2h2.077z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M21.57 5.852h-18a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2M9.839 15.383h-6.27a1 1 0 0 1 0-2h6.27a1 1 0 0 1 0 2" />
    </G>
  </Svg>
);
export default IconlystLibraryAddPlusBulk;
