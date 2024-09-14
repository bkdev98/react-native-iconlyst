import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Bulk = ({
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
      <Path d="M11.825 15.217h.35a4.35 4.35 0 0 0 4.13-2.94.387.387 0 0 0-.372-.506h-1.077a.615.615 0 0 1-.62-.611c0-.339.277-.613.62-.613H15.9a.62.62 0 0 0 .626-.618.62.62 0 0 0-.626-.618h-1.044a.616.616 0 0 1-.62-.613c0-.338.277-.613.62-.613H15.9a.62.62 0 0 0 .626-.618.62.62 0 0 0-.626-.618h-1.044a.616.616 0 0 1-.62-.613c0-.338.277-.612.62-.612h1.133c.26 0 .445-.245.375-.493A4.345 4.345 0 0 0 12.174 2h-.349C9.422 2 7.474 3.923 7.474 6.297v4.623c0 2.373 1.948 4.297 4.351 4.297" />
      <Path
        d="M19.531 9.826a.96.96 0 0 0-.968.956c0 3.573-2.944 6.48-6.563 6.48s-6.563-2.907-6.563-6.48a.96.96 0 0 0-.968-.956.96.96 0 0 0-.969.956c0 4.305 3.3 7.86 7.532 8.337v1.924c0 .528.433.957.968.957a.963.963 0 0 0 .97-.957V19.12c4.23-.478 7.53-4.032 7.53-8.337a.96.96 0 0 0-.969-.956"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystVoice2Bulk;
