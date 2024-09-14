import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRadioBulk = ({
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
      fillRule="evenodd"
      d="M17.101 6.916H9.115l3.908-3.18a.75.75 0 0 0 .108-1.054.75.75 0 0 0-1.055-.11L6.45 7.153C4.235 7.775 2.82 9.7 2.82 12.362v3.79c0 3.257 2.097 5.445 5.218 5.445H17.1c3.123 0 5.22-2.188 5.22-5.445v-3.79c0-3.257-2.097-5.446-5.219-5.446"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.084 17.918a2.21 2.21 0 0 1-2.205-2.206c0-1.216.989-2.205 2.205-2.205s2.206.989 2.206 2.204-.99 2.207-2.206 2.207m-.705-2.207a.705.705 0 1 1 1.411.001.705.705 0 0 1-1.41 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.943 12.189H7.197a.75.75 0 0 1 0-1.5h10.746a.75.75 0 0 1 0 1.5M15.355 16.95a.75.75 0 0 1-1.5 0v-2.474a.75.75 0 0 1 1.5 0zM18.261 16.95a.75.75 0 0 1-1.5 0v-2.474a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystRadioBulk;
