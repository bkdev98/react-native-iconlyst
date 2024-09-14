import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanLocationBulk = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.98 12.17a1.195 1.195 0 0 1 0-2.39c.66 0 1.2.54 1.2 1.19 0 .66-.54 1.2-1.2 1.2m0-5.42c-2.46 0-4.47 2.01-4.47 4.47 0 3.04 3.5 6.03 4.47 6.03s4.47-2.99 4.47-6.03c0-2.46-2-4.47-4.47-4.47"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M15.85 3.752h1.256a3.146 3.146 0 0 1 3.143 3.142v1.577a.75.75 0 0 0 1.5 0V6.894a4.65 4.65 0 0 0-4.643-4.642H15.85a.75.75 0 0 0 0 1.5M3 9.22a.75.75 0 0 0 .75-.75V6.895a3.146 3.146 0 0 1 3.143-3.142h1.289a.75.75 0 0 0 0-1.5h-1.29A4.65 4.65 0 0 0 2.25 6.894V8.47c0 .414.336.75.75.75M8.15 20.248H6.893a3.146 3.146 0 0 1-3.143-3.142V15.53a.75.75 0 0 0-1.5 0v1.577a4.65 4.65 0 0 0 4.643 4.642H8.15a.75.75 0 0 0 0-1.5M21 14.78a.75.75 0 0 0-.75.75v1.577a3.146 3.146 0 0 1-3.143 3.142h-1.289a.75.75 0 0 0 0 1.5h1.29a4.65 4.65 0 0 0 4.642-4.642V15.53a.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystScanLocationBulk;
