import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerBlockOutline = ({
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
      d="M4.148 3.737c1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.128 1.49C21.41 4.725 22 6.127 22 7.782v3.57a.75.75 0 0 1-1.5 0v-3.57c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.276c-1.317 0-2.38.409-3.106 1.084C4.45 5.504 4 6.494 4 7.782v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h3.083a.75.75 0 0 1 0 1.5H8.276c-1.627 0-3.078-.509-4.128-1.488C3.09 19.279 2.5 17.876 2.5 16.217V7.782c0-1.66.59-3.062 1.648-4.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.863 16.135a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75M6.863 7.865a.75.75 0 0 1 .75-.75h.523a.75.75 0 1 1 0 1.5h-.523a.75.75 0 0 1-.75-.75m4.739 0a.75.75 0 0 1 .75-.75h4.534a.75.75 0 0 1 0 1.5h-4.534a.75.75 0 0 1-.75-.75M2.523 12a.75.75 0 0 1 .75-.75h9.197a.75.75 0 0 1 0 1.5H3.273a.75.75 0 0 1-.75-.75M13.764 17.631a4.118 4.118 0 1 1 8.237 0 4.118 4.118 0 0 1-8.237 0m4.118-2.618a2.618 2.618 0 1 0 0 5.237 2.618 2.618 0 0 0 0-5.237"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.813 14.736a.75.75 0 0 1 .001 1.06l-4.758 4.768a.75.75 0 0 1-1.062-1.06l4.758-4.767a.75.75 0 0 1 1.061-.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerBlockOutline;