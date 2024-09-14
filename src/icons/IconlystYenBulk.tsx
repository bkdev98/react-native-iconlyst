import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenBulk = ({
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
      d="M9.92 10.522H8.183a1 1 0 1 0 0 2h7.636a1 1 0 1 0 0-2H9.92"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M15.582 5.438a1 1 0 0 1 1.561 1.248l-3.065 3.836H9.92L6.856 6.686A1 1 0 1 1 8.42 5.438L12 9.92zM11.005 18.062v-5.54h2v5.54a1 1 0 1 1-2 0" />
    </G>
  </Svg>
);
export default IconlystYenBulk;
