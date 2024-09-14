import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.684 3h6.634C18.266 3 20.1 5.081 20.1 8.026v7.948c0 2.945-1.834 5.026-4.783 5.026H8.684C5.735 21 3.9 18.919 3.9 15.974V8.026C3.9 5.081 5.744 3 8.684 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.33 9.957 5.34 4.272L12 16.365V7.82l2.67 2.137-5.34 4.272"
    />
  </Svg>
);
export default IconlystBluetoothSquareLight;
