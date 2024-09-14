import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSearchOutline = ({
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
      d="M4.148 3.737c1.05-.979 2.5-1.487 4.128-1.487h7.947c1.629 0 3.079.511 4.13 1.49 1.055.985 1.646 2.387 1.646 4.042v3.57a.75.75 0 0 1-1.5 0v-3.57c0-1.284-.449-2.273-1.17-2.945-.726-.677-1.789-1.087-3.106-1.087H8.276c-1.318 0-2.38.409-3.106 1.084C4.45 5.504 4 6.494 4 7.782v8.433c0 1.29.45 2.279 1.17 2.95.726.676 1.789 1.085 3.106 1.085h3.082a.75.75 0 1 1 0 1.5H8.276c-1.627 0-3.078-.51-4.128-1.488C3.09 19.278 2.5 17.875 2.5 16.215V7.782c0-1.66.59-3.062 1.648-4.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.863 16.135a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75M6.863 7.864a.75.75 0 0 1 .75-.75h.523a.75.75 0 1 1 0 1.5h-.523a.75.75 0 0 1-.75-.75m4.739 0a.75.75 0 0 1 .75-.75h4.534a.75.75 0 0 1 0 1.5h-4.534a.75.75 0 0 1-.75-.75M17.77 15.18a2.19 2.19 0 1 0 0 4.38 2.19 2.19 0 0 0 0-4.38m3.024 4.305a3.69 3.69 0 1 0-1.092 1.029l1.019 1.017a.75.75 0 1 0 1.06-1.061zM2.523 12a.75.75 0 0 1 .75-.75h9.197a.75.75 0 0 1 0 1.5H3.273a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerSearchOutline;
