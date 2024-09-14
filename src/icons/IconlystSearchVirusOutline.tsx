import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchVirusOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.115 8.75a3.43 3.43 0 0 0-3.428 3.428v2.766c0 1.6 1.096 2.946 2.58 3.322a.75.75 0 1 1-.369 1.454 4.93 4.93 0 0 1-3.711-4.776v-2.766a4.93 4.93 0 0 1 4.927-4.928h1.222a4.93 4.93 0 0 1 4.437 2.78.75.75 0 0 1-1.35.654 3.43 3.43 0 0 0-3.086-1.934z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.666 15.093a.75.75 0 0 1-.429.97l-1.4.541a2.43 2.43 0 0 0-1.51 1.856v.007l-.208 1.196a.75.75 0 1 1-1.478-.257l.207-1.193a3.93 3.93 0 0 1 2.436-3.003l.008-.003 1.404-.543a.75.75 0 0 1 .97.429M7.79 11.41l.2.014a.75.75 0 0 1-.11 1.496l-.139-.01c-1.449-.11-2.723-.205-4.212.394a.75.75 0 0 1-.56-1.392c1.82-.731 3.405-.61 4.821-.503M4.254 4.48a.75.75 0 0 1 .865.613l.204 1.196a2.45 2.45 0 0 0 1.514 1.866l2.178.851a.75.75 0 0 1-.546 1.397l-2.18-.852h-.004a3.95 3.95 0 0 1-2.44-3.01L3.64 5.345a.75.75 0 0 1 .613-.866M21.191 4.48a.75.75 0 0 1 .613.865l-.203 1.196a3.95 3.95 0 0 1-2.441 3.01h-.003l-2.182.852a.75.75 0 1 1-.546-1.397l2.18-.851a2.45 2.45 0 0 0 1.513-1.866l.204-1.196a.75.75 0 0 1 .865-.614M12.724 4.695a2.03 2.03 0 0 0-2.03 2.03v1.892a.75.75 0 0 1-1.5 0V6.725a3.53 3.53 0 1 1 7.06 0v1.892a.75.75 0 0 1-1.5 0V6.725a2.03 2.03 0 0 0-2.03-2.03M17.239 13.8a2.638 2.638 0 1 0 0 5.277 2.638 2.638 0 0 0 0-5.276M13.1 16.44a4.138 4.138 0 1 1 7.473 2.45l1.206 1.203a.75.75 0 1 1-1.06 1.062l-1.238-1.237a4.14 4.14 0 0 1-6.381-3.479"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchVirusOutline;
