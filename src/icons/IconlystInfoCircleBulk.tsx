import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoCircleBulk = ({
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
        d="M22 12c0 5.524-4.477 10-10 10S2 17.524 2 12C2 6.478 6.477 2 12 2s10 4.478 10 10"
        opacity={0.4}
      />
      <Path d="M11.995 14.929c.493 0 .885.393.885.874a.876.876 0 0 1-.875.875.874.874 0 1 1-.01-1.75m0-7.593c.482 0 .875.393.875.875v4.42a.877.877 0 0 1-.875.875.877.877 0 0 1-.875-.875V8.21c0-.482.393-.875.875-.875" />
    </G>
  </Svg>
);
export default IconlystInfoCircleBulk;
