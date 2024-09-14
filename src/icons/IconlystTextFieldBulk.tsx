import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextFieldBulk = ({
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
      d="M4.205 13.39a.75.75 0 0 1-.75-.75v-1.487a.8.8 0 0 1 0-.205V9.45a.75.75 0 1 1 1.5 0v.85h14.663v-.84a.75.75 0 0 1 1.5 0v3.18a.75.75 0 0 1-1.5 0v-.84H4.955v.84a.75.75 0 0 1-.75.75"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M6.91 8.35h10.75a.75.75 0 0 0 .75-.75V6.13a3.885 3.885 0 0 0-3.883-3.88h-4.484A3.886 3.886 0 0 0 6.16 6.13V7.6c0 .414.336.75.75.75M10.052 21.75h4.474a3.886 3.886 0 0 0 3.883-3.88V14.2a.75.75 0 0 0-.75-.75H6.91a.75.75 0 0 0-.75.75v3.66a3.895 3.895 0 0 0 3.892 3.89" />
    </G>
  </Svg>
);
export default IconlystTextFieldBulk;
