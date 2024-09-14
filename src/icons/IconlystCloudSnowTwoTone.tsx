import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudSnowTwoTone = ({
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
      d="M18.618 16.73a4.14 4.14 0 0 0 2.437-3.775c0-2.595-1.83-4.139-4.103-4.14 0-1.633-1.28-4.898-4.897-4.898S7.158 7.182 7.158 8.814c-2.27.02-4.103 1.546-4.103 4.141 0 1.68.999 3.126 2.436 3.775"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.17 15.765.007-.038m-.007 2.918.007-.038m2.874-1.44.007.038m-.007 2.88.007-.038m2.874-4.32.007.037m-.007 2.881.007-.038"
    />
  </Svg>
);
export default IconlystCloudSnowTwoTone;
