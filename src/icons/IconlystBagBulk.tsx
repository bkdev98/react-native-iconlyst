import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagBulk = ({
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
      <Path d="M17.086 7c1.264 0 2.59.91 3.058 3.12l.77 6.195C21.478 20.354 19.207 22 16.157 22h-8.29c-3.057 0-5.4-1.137-4.763-5.685l.778-6.195C4.28 7.846 5.65 7 6.932 7Zm-7.989 3.33a.897.897 0 0 0-.884.909c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91l-.007-.114a.893.893 0 0 0-.877-.796m5.789 0a.897.897 0 0 0-.884.909c0 .502.396.91.884.91a.897.897 0 0 0 .884-.91.897.897 0 0 0-.884-.91" />
      <Path
        d="M16.974 6.774A.5.5 0 0 1 16.93 7h-1.437a.7.7 0 0 1-.043-.226 3.48 3.48 0 0 0-3.484-3.472 3.48 3.48 0 0 0-3.484 3.472.7.7 0 0 1 0 .226H7.01a.7.7 0 0 1 0-.226A4.99 4.99 0 0 1 12.005 2 4.99 4.99 0 0 1 17 6.774z"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystBagBulk;
