import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldRefreshBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.102 10.73c-.136-4.364-1.498-7.114-2.453-7.114s-2.316 2.75-2.452 7.114zM15.525 10.73h5.1a9.02 9.02 0 0 0-7.92-8.232c1.75 1.024 2.71 4.563 2.82 8.232M10.594 2.498a9.016 9.016 0 0 0-7.919 8.232h5.098c.11-3.669 1.071-7.208 2.821-8.232M7.773 12.153H2.674a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232M13.23 12.151H9.2c.13 4.37 1.5 7.11 2.45 7.11.15 0 .31-.07.47-.2.25-.2.52-.55.77-1.05a2.494 2.494 0 0 1-.91-1.93v-1.77c0-.92.5-1.73 1.25-2.16" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.357 13.565c-.783 0-1.522.229-2.15.633a.74.74 0 0 0-.726-.633.75.75 0 0 0-.75.75v1.77c0 .037.016.069.02.104.009.055.014.11.033.162.017.041.042.076.065.114.027.046.05.09.086.128.034.037.075.061.115.09.033.023.057.055.094.073.008.006.017.005.026.008.039.018.082.024.125.035.056.015.11.032.167.034q.01.002.019.003h1.782a.75.75 0 0 0 .007-1.498 2.44 2.44 0 0 1 1.087-.273 2.47 2.47 0 0 1 2.469 2.469 2.47 2.47 0 0 1-2.47 2.468 2.45 2.45 0 0 1-2.111-1.191.751.751 0 0 0-1.284.776 3.94 3.94 0 0 0 3.396 1.915 3.973 3.973 0 0 0 3.969-3.968 3.974 3.974 0 0 0-3.97-3.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldRefreshBulk;
