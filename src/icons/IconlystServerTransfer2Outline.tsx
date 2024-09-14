import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTransfer2Outline = ({
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
      d="M4.148 3.737c1.05-.979 2.5-1.487 4.128-1.487h7.947c1.629 0 3.079.511 4.13 1.49C21.407 4.725 22 6.127 22 7.782v3.57a.75.75 0 0 1-1.5 0v-3.57c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.107-1.087H8.276c-1.317 0-2.38.409-3.106 1.084C4.45 5.504 4 6.494 4 7.782v8.434c0 1.289.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h2.11a.75.75 0 0 1 0 1.5h-2.11c-1.627 0-3.078-.509-4.128-1.488C3.09 19.278 2.5 17.875 2.5 16.216V7.782c0-1.66.59-3.062 1.648-4.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.523 12a.75.75 0 0 1 .75-.75h8.224a.75.75 0 0 1 0 1.5H3.273a.75.75 0 0 1-.75-.75M6.863 16.136a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75M6.863 7.865a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75m4.739 0a.75.75 0 0 1 .75-.75h4.534a.75.75 0 0 1 0 1.5h-4.534a.75.75 0 0 1-.75-.75M14.148 13.762a.75.75 0 0 1 1.042 0l1.652 1.595a.75.75 0 1 1-1.042 1.08l-1.132-1.093-1.132 1.092a.75.75 0 1 1-1.041-1.08zM21.79 18.885a.75.75 0 0 1-.019 1.06l-1.653 1.595a.75.75 0 0 1-1.041 0l-1.653-1.595a.75.75 0 1 1 1.042-1.08l1.131 1.093 1.133-1.092a.75.75 0 0 1 1.06.019"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.668 13.553a.75.75 0 0 1 .75.75v6.222a.75.75 0 0 1-1.5 0v-6.222a.75.75 0 0 1 .75-.75M19.598 14.026a.75.75 0 0 1 .75.75v6.222a.75.75 0 0 1-1.5 0v-6.222a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerTransfer2Outline;
