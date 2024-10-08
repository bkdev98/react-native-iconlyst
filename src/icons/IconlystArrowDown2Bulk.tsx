import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown2Bulk = ({
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
      <Path d="m10.867 7.214 4.22 6.848a.435.435 0 0 1-.027.494c-.5.65-1.009 1.232-1.436 1.62 0 0-.342.334-.559.478a1.72 1.72 0 0 1-1.059.346c-.422 0-.82-.123-1.14-.368-.057-.056-.308-.268-.513-.468-1.276-1.169-3.384-4.219-4.023-5.823-.103-.233-.318-.856-.33-1.18 0-.311.068-.612.217-.901.205-.356.523-.634.9-.79.262-.101 1.048-.257 1.071-.257.561-.1 1.35-.175 2.27-.213a.46.46 0 0 1 .41.214" />
      <Path
        d="M13.14 7.672c-.187-.302.052-.682.41-.667.843.036 1.585.099 2.137.175.012.012.99.167 1.322.346.615.311.991.923.991 1.58v.055c-.011.424-.387 1.326-.41 1.326-.189.454-.509 1.047-.894 1.685a.46.46 0 0 1-.778.007z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystArrowDown2Bulk;
