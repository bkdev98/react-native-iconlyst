import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryBulk = ({
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.478 10 10"
        opacity={0.4}
      />
      <Path d="m15.86 8.705-1.62 5.12c-.06.21-.23.38-.44.44l-5.1 1.6a.448.448 0 0 1-.56-.56l1.6-5.13c.06-.21.23-.37.44-.44l5.12-1.6c.35-.11.67.22.56.57" />
    </G>
  </Svg>
);
export default IconlystDiscoveryBulk;
