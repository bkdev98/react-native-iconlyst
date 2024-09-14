import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Bulk = ({
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
        d="M16.62 22H7.38c-2.69 0-4.88-2.169-4.88-4.835v-5.33C2.5 9.17 4.69 7 7.38 7h9.24c2.69 0 4.88 2.169 4.88 4.835v5.33C21.5 19.83 19.31 22 16.62 22"
        opacity={0.4}
      />
      <Path d="M15.755 10a.734.734 0 0 1-.745-.722V6.357c0-1.606-1.346-2.912-3.001-2.912-.762 0-1.561.297-2.13.843a2.85 2.85 0 0 0-.89 2.055v2.935a.734.734 0 0 1-.744.722.734.734 0 0 1-.745-.722V6.357a4.27 4.27 0 0 1 1.33-3.094C9.68 2.443 10.78 2.032 12.012 2 14.485 2 16.5 3.954 16.5 6.357v2.92a.734.734 0 0 1-.745.723" />
    </G>
  </Svg>
);
export default IconlystBag2Bulk;
