import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothCloseBroken = ({
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
      d="M12.502 4.83 10.105 3v13.505m5.62 0L10.106 21M15.727 16.505 5.418 8.255M5.418 15.754l4.688-3.745m0-.009 2.321-1.754M15.725 5.604l3.858 3.858m0-3.858-3.858 3.858"
    />
  </Svg>
);
export default IconlystBluetoothCloseBroken;
