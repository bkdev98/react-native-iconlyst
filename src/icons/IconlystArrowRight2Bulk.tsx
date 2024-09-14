import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRight2Bulk = ({
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
      <Path d="m7.214 13.133 6.848-4.22a.435.435 0 0 1 .494.027c.65.5 1.232 1.009 1.62 1.436 0 0 .334.342.478.559.234.296.346.683.346 1.059 0 .422-.123.82-.368 1.14-.056.057-.268.308-.468.513-1.169 1.276-4.219 3.384-5.823 4.023-.233.103-.856.318-1.18.33-.311 0-.612-.068-.901-.217a1.87 1.87 0 0 1-.79-.9c-.101-.262-.257-1.048-.257-1.071-.1-.561-.175-1.35-.213-2.27a.46.46 0 0 1 .214-.41" />
      <Path
        d="M7.672 10.86c-.302.187-.682-.052-.667-.41.036-.843.099-1.585.175-2.137.012-.012.167-.99.346-1.322A1.78 1.78 0 0 1 9.106 6h.055c.424.011 1.326.387 1.326.41.454.189 1.047.509 1.685.894a.46.46 0 0 1 .007.778z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystArrowRight2Bulk;
