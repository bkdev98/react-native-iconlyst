import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel3Broken = ({
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
      d="M9.764 8.23c3.61 0 6.537-1.17 6.537-2.615C16.301 4.171 13.375 3 9.764 3S3.225 4.171 3.225 5.615s2.928 2.616 6.539 2.616"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.3 5.615v12.77C16.3 19.83 13.375 21 9.764 21s-6.538-1.17-6.538-2.615v-3.192M3.225 12V5.615M8.64 5.46q1.141.31 2.26 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.94 10.582c0 1.392.834 1.392.834 2.786 0 1.385-.833 1.385-.833 2.778 0 1.106.524 1.336.74 2.067h-4.382M10.16 3h10.507c-.223.703-.726.948-.726 2.025 0 1.385.833 1.385.833 2.778"
    />
  </Svg>
);
export default IconlystTowel3Broken;
