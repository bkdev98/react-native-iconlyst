import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowLeftSquareBulk = ({
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
        d="M16.084 2H7.916C4.377 2 2 4.276 2 7.665v8.67C2 19.724 4.377 22 7.916 22h8.168C19.622 22 22 19.723 22 16.334v-8.67C22 4.277 19.622 2 16.084 2"
        opacity={0.4}
      />
      <Path d="M11.145 7.72 7.38 11.47a.773.773 0 0 0 0 1.064l3.765 3.748a.75.75 0 0 0 1.059-1.064L9.727 12.75h6.355a.75.75 0 1 0 0-1.5H9.727l2.477-2.466a.75.75 0 0 0 .002-1.061.75.75 0 0 0-1.061-.002" />
    </G>
  </Svg>
);
export default IconlystArrowLeftSquareBulk;
