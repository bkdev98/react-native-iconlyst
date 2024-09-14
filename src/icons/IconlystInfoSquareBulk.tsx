import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoSquareBulk = ({
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
      <Path d="M11.995 10.487c.482 0 .875.393.875.875v4.42a.877.877 0 0 1-.875.875.877.877 0 0 1-.875-.875v-4.42c0-.482.393-.875.875-.875m.01-3.173c.483 0 .875.393.875.875a.878.878 0 0 1-1.755 0c0-.482.395-.875.88-.875" />
    </G>
  </Svg>
);
export default IconlystInfoSquareBulk;
