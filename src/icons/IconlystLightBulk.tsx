import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightBulk = ({
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
      d="M13 4a1 1 0 1 0-2 0v1.96a8.616 8.616 0 0 0-7.604 8.556.5.5 0 0 0 .5.5h16.23a.5.5 0 0 0 .5-.5A8.617 8.617 0 0 0 13 5.958z"
      opacity={0.4}
    />
    <Path fill={props.color} d="M8.322 15.016a3.708 3.708 0 0 0 7.378 0z" />
    <G fill={props.color} opacity={0.4}>
      <Path d="M8.263 19.63a.75.75 0 1 0-1.06-1.06l-.403.402a.75.75 0 1 0 1.06 1.06zM16.843 18.57a.75.75 0 1 0-1.06 1.06l.402.402a.75.75 0 1 0 1.06-1.06zM12.76 20.432a.75.75 0 0 0-1.5 0v.569a.75.75 0 0 0 1.5 0z" />
    </G>
  </Svg>
);
export default IconlystLightBulk;
