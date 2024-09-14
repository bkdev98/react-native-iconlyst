import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreen2Outline = ({
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
      d="M18.632 17.859 5.877 17.85a3.29 3.29 0 0 1-3.377-3.5v-3.456a3.293 3.293 0 0 1 3.378-3.5h4.472a.75.75 0 0 1 0 1.5H5.878a1.8 1.8 0 0 0-1.878 2v3.456a1.8 1.8 0 0 0 1.878 2l12.754.008a1.8 1.8 0 0 0 1.868-2.013V10.89a1.8 1.8 0 0 0-1.868-2H18a.75.75 0 1 1 0-1.5h.63A3.29 3.29 0 0 1 22 10.89v3.456a3.295 3.295 0 0 1-3.368 3.513"
    />
    <Path
      fill={props.color}
      d="M5.75 19.238a.748.748 0 0 1-.63-1.158l.9-1.385a.75.75 0 0 1 1.259.817l-.9 1.384a.75.75 0 0 1-.63.342M18.692 19.238a.75.75 0 0 1-.629-.342l-.9-1.384a.75.75 0 1 1 1.258-.817l.9 1.385a.75.75 0 0 1-.629 1.158M9.834 14.815H6.45a.75.75 0 0 1 0-1.5h3.385a.75.75 0 1 1 0 1.5M7.865 12.209H6.45a.75.75 0 1 1 0-1.5h1.416a.75.75 0 1 1 0 1.5M14.25 14.244a4.74 4.74 0 1 1 0-9.482 4.74 4.74 0 0 1 0 9.482m0-7.982a3.241 3.241 0 1 0 0 6.482 3.241 3.241 0 0 0 0-6.482"
    />
    <Path
      fill={props.color}
      d="M14.25 11.623a2.118 2.118 0 1 1 0-4.237 2.118 2.118 0 0 1 0 4.237m0-2.736a.618.618 0 1 0 0 1.24.618.618 0 0 0 0-1.242z"
    />
  </Svg>
);
export default IconlystProjectorScreen2Outline;
