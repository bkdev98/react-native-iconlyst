import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeUpBrokencurved = ({
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
      d="M19.69 5.822a11.13 11.13 0 0 1 0 12.357M17.244 8.264a7.74 7.74 0 0 1 0 7.472M3.966 8.418c-1.03.874-1.031 2.336-1.03 3.582-.001 1.246 0 2.708 1.03 3.582s1.847.513 3.179.952 3.199 3.146 5.26 1.923c1.115-.792 1.64-2.286 1.64-6.457s-.501-5.65-1.64-6.457c-2.061-1.222-3.928 1.485-5.26 1.923"
    />
  </Svg>
);
export default IconlystVolumeUpBrokencurved;
