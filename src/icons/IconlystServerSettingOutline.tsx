import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSettingOutline = ({
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
      d="M4.148 3.737c1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49C21.409 4.725 22 6.127 22 7.782v3.57a.75.75 0 0 1-1.5 0v-3.57c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.276c-1.317 0-2.38.409-3.106 1.085C4.45 5.505 4 6.493 4 7.782v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h3.083a.75.75 0 0 1 0 1.5H8.276c-1.627 0-3.078-.509-4.128-1.487C3.09 19.278 2.5 17.876 2.5 16.216V7.782c0-1.66.59-3.062 1.648-4.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.523 12a.75.75 0 0 1 .75-.75h9.197a.75.75 0 0 1 0 1.5H3.273a.75.75 0 0 1-.75-.75M6.863 16.136a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75M6.863 7.865a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75m4.739 0a.75.75 0 0 1 .75-.75h4.534a.75.75 0 0 1 0 1.5h-4.534a.75.75 0 0 1-.75-.75M18.226 15.93a1.577 1.577 0 1 0 .001 3.155 1.577 1.577 0 0 0 0-3.154m-3.077 1.578a3.077 3.077 0 1 1 6.155 0 3.077 3.077 0 0 1-6.155 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.227 13.267a.75.75 0 0 1 .75.75v1.163a.75.75 0 0 1-1.5 0v-1.163a.75.75 0 0 1 .75-.75m-3.673 2.12a.75.75 0 0 1 1.024-.275l1.008.582a.75.75 0 1 1-.75 1.3l-1.008-.582a.75.75 0 0 1-.274-1.025m7.347 0a.75.75 0 0 1-.275 1.025l-1.008.582a.75.75 0 0 1-.75-1.3l1.008-.581a.75.75 0 0 1 1.024.274m-5.04 2.91a.75.75 0 0 1-.275 1.025l-1.008.582a.75.75 0 0 1-.75-1.3l1.008-.581a.75.75 0 0 1 1.025.274m2.732 0a.75.75 0 0 1 1.025-.274l1.008.582a.75.75 0 0 1-.75 1.299l-1.008-.582a.75.75 0 0 1-.275-1.025m-1.366.79a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.164a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerSettingOutline;
