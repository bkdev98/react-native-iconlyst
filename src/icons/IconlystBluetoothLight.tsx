import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothLight = ({
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
      d="m4.161 8.255 4.688 3.754m0 0 5.62 4.496L8.85 21zm0 0V12m0 .009L4.16 15.754M8.85 12V3l5.62 4.505zM15.92 10.52c.82.819.82 2.147 0 2.966M18.313 7.793c2.04 2.426 2.031 5.997-.01 8.422"
    />
  </Svg>
);
export default IconlystBluetoothLight;
