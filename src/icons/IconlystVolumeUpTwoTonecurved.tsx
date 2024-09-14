import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpTwoTonecurved = ({
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
      d="M19.436 5.775c2.493 3.72 2.5 8.629 0 12.357M16.989 8.217a7.74 7.74 0 0 1 0 7.472"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.682 11.953c-.002 1.246 0 2.708 1.03 3.582s1.846.513 3.178.952 3.199 3.146 5.26 1.923c1.115-.792 1.64-2.286 1.64-6.457s-.501-5.65-1.64-6.457C10.09 4.274 8.222 6.98 6.89 7.419c-1.332.44-2.149.079-3.179.952-1.029.874-1.031 2.336-1.029 3.582"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeUpTwoTonecurved;
