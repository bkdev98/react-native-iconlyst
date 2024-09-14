import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSockBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.008 8.388v6.855a2.93 2.93 0 0 1-1.367 2.477l-5.116 3.224a4.36 4.36 0 0 1-5.496-.697c-1.972-2.09-1.418-5.484 1.117-6.838l1.869-.998a.09.09 0 0 0 .047-.08v-1.826"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.012 19.348a4.75 4.75 0 0 1-.723-1.854M13.46 15.095a4.8 4.8 0 0 1 .808-1.473M18.007 11.945c-.632 0-1.235.122-1.786.345M5.16 15.598a4.9 4.9 0 0 1 1.579.26M8.662 17.094q.358.38.625.826M9.946 19.922a4.8 4.8 0 0 1-.127 1.635M13.383 3.615h3.908c1.052 0 1.905.623 1.905 1.654l-.001 1.355c0 1.03-.853 1.654-1.905 1.654H9.473c-1.052 0-1.905-.624-1.905-1.654l.001-1.355c0-1.03.853-1.654 1.905-1.654h1.04"
    />
  </Svg>
);
export default IconlystSockBroken;
