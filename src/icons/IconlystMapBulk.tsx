import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapBulk = ({
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
      <Path d="M2.272 7.446q-.022.287-.022.584v7.94c0 3.18 1.88 5.4 4.75 5.73h.012L9.415 8.926zM9.02 21.75h7.2c3.31 0 5.53-2.32 5.53-5.78v-4.506L11.354 9.321z" />
    </G>
    <Path
      fill={props.color}
      d="M7.78 2.25h8.44c3.31 0 5.53 2.32 5.53 5.78v1.405l-10.976-2.25-8.06-1.668C3.52 3.496 5.36 2.25 7.78 2.25"
    />
  </Svg>
);
export default IconlystMapBulk;
