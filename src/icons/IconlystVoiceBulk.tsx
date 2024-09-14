import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceBulk = ({
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
        d="M19.531 9.826a.96.96 0 0 0-.968.956c0 3.573-2.944 6.48-6.563 6.48s-6.563-2.907-6.563-6.48a.96.96 0 0 0-.968-.956.96.96 0 0 0-.969.956c0 4.305 3.3 7.86 7.532 8.337v1.924c0 .528.433.957.968.957a.963.963 0 0 0 .97-.957V19.12c4.23-.478 7.53-4.032 7.53-8.337a.96.96 0 0 0-.969-.956"
        opacity={0.4}
      />
      <Path d="M11.825 15.217h.35c2.403 0 4.352-1.924 4.352-4.296V6.297c0-2.374-1.95-4.297-4.352-4.297h-.35C9.422 2 7.473 3.923 7.473 6.297v4.624c0 2.372 1.95 4.296 4.352 4.296" />
    </G>
  </Svg>
);
export default IconlystVoiceBulk;
