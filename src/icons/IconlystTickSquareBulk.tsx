import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBulk = ({
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
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
        opacity={0.4}
      />
      <Path d="M10.813 15.248a.87.87 0 0 1-.619-.256l-2.373-2.373a.874.874 0 1 1 1.237-1.238l1.755 1.755 4.128-4.128a.874.874 0 1 1 1.237 1.238l-4.746 4.746a.87.87 0 0 1-.619.256" />
    </G>
  </Svg>
);
export default IconlystTickSquareBulk;
