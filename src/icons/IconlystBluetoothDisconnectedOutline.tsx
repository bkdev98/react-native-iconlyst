import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothDisconnectedOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.515 2.324a.75.75 0 0 1 .793.09l5.567 4.454a.75.75 0 0 1 0 1.17l-2.683 2.15a.75.75 0 1 1-.937-1.17l1.952-1.564-3.618-2.894V6.72a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .425-.676m-8.46.818a.75.75 0 0 1 1.061 0l8.153 8.154a.8.8 0 0 1 .188.188l8.987 8.986a.75.75 0 1 1-1.061 1.06l-3.657-3.657-4.418 3.534a.75.75 0 0 1-1.219-.585v-7.348l-3.502 2.802a.75.75 0 0 1-.937-1.172l4.06-3.247-7.654-7.654a.75.75 0 0 1 0-1.06m9.534 10.595 3.07 3.069-3.07 2.455z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothDisconnectedOutline;
