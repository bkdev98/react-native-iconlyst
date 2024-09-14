import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUploadLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M7.39 8.984h-.933a3.685 3.685 0 0 0-3.685 3.685v4.875a3.685 3.685 0 0 0 3.685 3.684h11.13a3.685 3.685 0 0 0 3.685-3.684v-4.885a3.675 3.675 0 0 0-3.674-3.675h-.944M12.021 2.191v12.04M9.106 5.119l2.915-2.928 2.916 2.928" />
    </G>
  </Svg>
);
export default IconlystUploadLight;
