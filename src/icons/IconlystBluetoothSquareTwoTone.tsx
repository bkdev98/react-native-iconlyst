import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareTwoTone = ({
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
      d="M9.184 3h6.634C18.766 3 20.6 5.081 20.6 8.026v7.948c0 2.945-1.834 5.026-4.783 5.026H9.184C6.235 21 4.4 18.919 4.4 15.974V8.026C4.4 5.081 6.244 3 9.184 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.83 9.957 5.34 4.272-2.67 2.136V7.82l2.67 2.137-5.34 4.272"
    />
  </Svg>
);
export default IconlystBluetoothSquareTwoTone;
