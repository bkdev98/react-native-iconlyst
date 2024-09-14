import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeavesLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.233 7.196c-.628.092-1.266 0-1.9.014-1.47.036-2.62 1.278-3.739 2.12a1.43 1.43 0 0 1-1.877-.134 1.446 1.446 0 0 1 0-2.04C5.925 5.946 6.992 4.82 8.63 4.183c2.272-.884 4.38-.454 6.68 0m-3.075 3.042h-1.24M4.297 20.502h.93c.71 0 1.153-.501 1.153-1.21v-4.155c0-.71-.442-1.211-1.153-1.211h-.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.696 13.75c-1.021-.256-2.04-.458-3.107-.431-1.69.04-2.871.982-4.21 1.88M12.069 16.805c.627-.092 1.266 0 1.9-.014 1.469-.035 2.62-1.278 3.738-2.12a1.43 1.43 0 0 1 1.877.135c.561.562.561 1.475 0 2.038-1.208 1.213-2.275 2.339-3.912 2.975-2.272.884-4.38.454-6.68 0m3.075-3.042h1.24M10.606 10.249c1.02.256 2.04.458 3.106.431 1.69-.04 2.872-.982 4.21-1.88M20.005 3.5h-.93c-.711 0-1.153.5-1.153 1.21v4.155c0 .71.442 1.211 1.152 1.211h.93"
    />
  </Svg>
);
export default IconlystLeavesLight;
