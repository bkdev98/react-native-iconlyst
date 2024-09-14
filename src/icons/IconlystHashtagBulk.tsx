import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHashtagBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} opacity={0.4}>
      <Path d="M13.547 13.625H5.875a1 1 0 0 0 0 2h7.422000000000001zM10.454 10.375h3.5l.25-2H5.875a1 1 0 0 0 0 2h4.579000000000001M15.969 10.375h2.156a1 1 0 1 0 0-2h-1.906zM18.125 13.625h-2.562l-.25 2h2.812a1 1 0 1 0 0-2" />
    </G>
    <Path
      fill={props.color}
      d="m10.454 10.376-.406 3.25H8.033l.406-3.25zM11.111 5.125l-.407 3.25H8.689l.437-3.498a1 1 0 0 1 1.985.248M7.376 18.877l.407-3.251h2.015l-.437 3.499a1 1 0 0 1-1.117.867 1 1 0 0 1-.868-1.116M16.625 5.125l-.406 3.25-.453 3.626-.453 3.625-.438 3.499a1 1 0 1 1-1.984-.248l.406-3.251.454-3.63.453-3.62.437-3.5a.994.994 0 0 1 1.116-.867 1 1 0 0 1 .868 1.116"
    />
  </Svg>
);
export default IconlystHashtagBulk;
