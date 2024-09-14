import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpSquareBulk = ({
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
        d="M22 16.084V7.916C22 4.377 19.724 2 16.335 2h-8.67C4.276 2 2 4.377 2 7.916v8.168C2 19.622 4.277 22 7.666 22h8.67C19.723 22 22 19.622 22 16.084"
        opacity={0.4}
      />
      <Path d="M16.28 11.145 12.53 7.38a.773.773 0 0 0-1.064 0L7.72 11.145a.75.75 0 0 0 1.064 1.059l2.467-2.477v6.355a.75.75 0 1 0 1.5 0V9.727l2.466 2.477a.75.75 0 0 0 1.061.002.75.75 0 0 0 .002-1.061" />
    </G>
  </Svg>
);
export default IconlystArrowUpSquareBulk;
