import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoBroken = ({
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
      d="M6.628 21c-2.106 0-3.415-1.507-3.415-3.642v-2.965c0-2.134 1.316-3.643 3.415-3.643h6.024c2.106 0 3.417 1.509 3.417 3.643v2.965c0 2.135-1.311 3.643-3.418 3.643H9.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.063 16.752 3.01 2.51c.204.169.46.263.724.263a1.154 1.154 0 0 0 1.148-1.16l.006-2.49M16.063 14.996l3.022-2.51a1.134 1.134 0 0 1 1.612.163c.168.208.26.469.259.737M9.68 14.426h2.52M12.67 3c1.599 0 2.895 1.315 2.895 2.937s-1.296 2.937-2.894 2.937-2.894-1.315-2.894-2.937c0-.727.26-1.392.691-1.905"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.598 6.982c0 1.045-.834 1.892-1.864 1.892S3.87 8.027 3.87 6.982 4.705 5.09 5.734 5.09s1.864.847 1.864 1.892"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraVideoBroken;
