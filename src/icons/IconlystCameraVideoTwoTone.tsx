import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoTwoTone = ({
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
      d="M12.902 10.75H6.878c-2.1 0-3.415 1.509-3.415 3.643v2.965c0 2.135 1.31 3.643 3.415 3.643h6.023c2.107 0 3.418-1.508 3.418-3.643v-2.965c0-2.134-1.311-3.643-3.417-3.643"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.313 14.996 3.022-2.51a1.134 1.134 0 0 1 1.612.163c.168.208.26.469.259.737l-.01 4.98a1.154 1.154 0 0 1-1.149 1.16c-.265 0-.52-.093-.724-.263l-3.01-2.51"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.93 14.426h2.52"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.815 5.937c0 1.622-1.296 2.937-2.894 2.937s-2.894-1.315-2.894-2.937S11.323 3 12.921 3s2.894 1.315 2.894 2.937M7.848 6.982c0 1.045-.834 1.892-1.864 1.892S4.12 8.027 4.12 6.982 4.955 5.09 5.984 5.09s1.864.847 1.864 1.892"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCameraVideoTwoTone;
