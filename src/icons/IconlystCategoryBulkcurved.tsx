import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoryBulkcurved = ({
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
      d="M10.539 6.647a3.642 3.642 0 1 1-7.284 0 3.642 3.642 0 0 1 7.284 0M21.245 17.353a3.642 3.642 0 1 1-7.284 0 3.642 3.642 0 0 1 7.284 0"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M21.245 6.647a3.642 3.642 0 1 1-7.284 0 3.642 3.642 0 0 1 7.284 0M10.539 17.353a3.642 3.642 0 1 1-7.284 0 3.642 3.642 0 0 1 7.284 0" />
    </G>
  </Svg>
);
export default IconlystCategoryBulkcurved;
