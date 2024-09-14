import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchGraphUpBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m20.293 19.784-2.544-2.535a8.9 8.9 0 0 0 2.142-5.797c0-.992-.16-1.963-.477-2.885a1 1 0 0 0-1.892.649c.245.714.369 1.465.369 2.236 0 3.832-3.116 6.95-6.945 6.95S4 15.284 4 11.452c0-3.827 3.116-6.94 6.945-6.94 1.258 0 2.482.334 3.54.968a1.001 1.001 0 0 0 1.027-1.717 8.9 8.9 0 0 0-4.567-1.251C6.014 2.512 2 6.522 2 11.452c0 4.936 4.014 8.95 8.946 8.95 2.002 0 3.847-.67 5.34-1.787L18.88 21.2a1 1 0 0 0 1.415-.003 1 1 0 0 0-.003-1.414"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.996 6.17a1 1 0 0 0-1-.998h-2.943a1 1 0 1 0 0 2h.46l-3.433 3.193-1.857-2.02a1 1 0 0 0-.702-.322.95.95 0 0 0-.721.272l-4.256 4.02a.998.998 0 0 0 .686 1.727 1 1 0 0 0 .687-.273l3.519-3.325 1.852 2.015a1 1 0 0 0 .697.322c.263.028.525-.087.72-.266L20 8.52v.593a1 1 0 0 0 1 .998h.003A1 1 0 0 0 22 9.11z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchGraphUpBulk;
